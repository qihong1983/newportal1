<?php

/**
 * cb.php
 *      只处理\?\?.+的情况
 *      部署在项目根目录中
 *  author: 拔赤 - lijine00333@163.com
 */
require "lessc.inc.php";
$less = new lessc;

//CDN 设置
//$CDN = 'http://a.tbcdn.cn/'; 
$CDN = 'http://backups.netease.com/'; //如果是在服务器上配置的话，则打开这一句的注释
$MOCK = 'a/dc/portal/1.0.0/';
$LOCALPATH = 'build/';



//读到-min文件时会转读源文件，这些文件除外
$exp = '/(editor-min|editor-core-pkg-min|calendar-pkg-min|editor-pkg-min|editor-plugin-pkg-min|kissy-min|simplecalendar-min|sizzle-pkg-min|base-pkg-min|jstorage-pkg-min)/';
 
// 线上未找到的文件
$unfound = array();
 
//抓取文件
function get_contents($url){
    $ch =curl_init($url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $str =curl_exec($ch);
    curl_close($ch);
    if ($str !==false) {
        return $str;
    }else {
        return '';
    }  
}
 
//得到扩展名
function get_extend($file_name) { 
    $extend =explode("." , $file_name);
    $va=count($extend)-1;
    return $extend[$va];
} 
 
/**
 * begin
 */
//cdn上存在的各种可能的文件类型
$header = array(
    'js' => 'Content-Type: application/x-javascript',
    'css' => 'Content-Type: text/css',
    'less' => 'Content-Type: text/css',
    'jpg' => 'Content-Type: image/jpg',
    'gif' => 'Content-Type: image/gif',    
    'png' => 'Content-Type: image/png',
    'jpeg' => 'Content-Type: image/jpeg',
    'swf' => 'Content-Type: application/x-shockwave-flash'
);
 
//文件类型
$type = '';
 
//原始请求文件完整路径数组
$files = array();
 
//原始请求文件相对路径数组
$tmp_files = array();

//过滤后的文件完整路径数组，即待抓取的文件列表
$a_files = array();

//文件的最后修改时间
$last_modified_time = 0;

//获得当前目录，比如，/home/a.tbcdn.cn/
$pwd = getcwd().'/';

// request headers
$request_headers = getallheaders(); 

// 输出结果使用的数组
$R_files = array();
 
//得到请求的前缀
$prefix = $_SERVER['SCRIPT_NAME'];

// 处理请求中附带的文件列表，得到原始数据
$split_a= explode("??",$_SERVER['REQUEST_URI']);

$tmp_files = explode(",",$split_a[1]);
 
if(preg_match('/,/',$split_a[1])){//多文件
    $_tmp = explode(',',$split_a[1]);
    foreach($_tmp as $v){
        $files[] = $prefix.$v;
    }
}else{//单文件
    $files[] = $prefix.$split_a[1];
}




// 得到需要读取的文件列表
foreach ($files as $k){

 

    //将开头的/和?去掉
    $k = preg_replace(
        array('/^\//','/\?.+$/'),
        array('',''),
        $k);
    
    //因为开发机特殊需要，-min到源文件的转读规则还是开启的
    //但只有在combo的url中才开启，直接访问文件不会转读
    /*
    if(!preg_match($exp,$k)){
        $k = preg_replace(
            array('/-min\./'),
            array('.'),
            $k);
    }
    */
 
    //最后可能是一个逗号
    if(!preg_match('/(\.js|\.css|\.less)$/',$k)){
        continue;
    }
    while(preg_match('/[^\/]+\/\.\.\//',$k)){
        $k = preg_replace(
            array('/[^\/]+\/\.\.\//'),
            array(''),
            $k,1);
    }

    $a_files[] = $k;
}



// 得到拼接文件的Last-Modified时间
foreach ($a_files as $k){


    if(file_exists($k)){
        $filemtime = filemtime($k);
        if($filemtime && ($filemtime > $last_modified_time)){
            $last_modified_time = $filemtime;
        }
    }
}

// 检查请求头的if-modified-since，判断是否304
if (isset($request_headers['If-Modified-Since']) && (strtotime($request_headers['If-Modified-Since']) == $last_modified_time)) {
    // 如果客户端带有缓存
    header('Last-Modified: '.gmdate('D, d M Y H:i:s', $last_modified_time.' GMT'), true, 304);
    exit;
} 



// 拼接文件，并应用通用规则
foreach ($a_files as $k) {

    // print_r($k);
    //mock url
    $k = str_replace($MOCK, $LOCALPATH,$k);

    // print_r($k);

    if(empty($type)) {
        $type = get_extend($k);
    }

    $lessfile = preg_replace(
        array('/\.css/'),
        array('.less'),
        $k);

    //文件存在
    if(file_exists($k)) {
        if($type == 'less'){
            $R_files[] = $less->compileFile($lessfile);
        }else{
            $R_files[] = file_get_contents($k);
        }
    }else if(($type == 'css' || $type == 'less') && file_exists($lessfile)){
        $R_files[] = $less->compileFile($lessfile);
    } else {

        $k = str_replace($LOCALPATH,'',$k);

        //文件不存在
        try{
            //php4不支持try catch，如果基于php4的话，删掉try catch语句
            $R_files[] = '/* combined from static server: http://backups.netease.com/'.$MOCK.$k.' */';
            $tfile = file($CDN.$MOCK.$k);
            if (!$tfile) {
                $tfile = file('http://backups.netease.com/'.$k);
            } 

            if(!$tfile){
                $unfound[] = 'http://backups.netease.com/'.$MOCK.$k;
            }
            $R_files[] = join('',$tfile);
            //$R_files[] = join('', get_contents($CDN.$k)); //如果apache不支持file抓取远程文件，打开这个注释，然后注释掉上一句
        }catch(Exception $e){}
    }
}
 
//添加过期头，过期时间1年
header("Expires: " . date("D, j M Y H:i:s", strtotime("now + 10 years")) ." GMT");
header("Cache-Control: max-age=315360000");
header('Last-Modified: '.gmdate('D, d M Y H:i:s', $last_modified_time).' GMT');
//输出文件类型
header($header[$type]);
//拼装文件
$result = join("\n",$R_files);
//输出文件
echo $result;

//echo "\n/*\n non published files:\n";
//echo join("\n",$unfound);
//echo "\n*/";
?>