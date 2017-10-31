import Mock from './mock/mock.jsx';

$.ajax({
    url: '/api/getlist.do',
}).done(function(data, status, xhr){

    data = JSON.parse(data);
 
    if ( data.status === true ) {
        new PNotify({
            title: '成功',
            text: '配置已保存',
            opacity: "1",
            type: "success",
            addclass: "stack_top_right",
            delay: 1400
        });
    } else {
        new PNotify({
            title: '失败',
            text: '配置未保存',
            opacity: "1",
            type: "danger",
            addclass: "stack_top_right",
            delay: 1400
        });
    }
});