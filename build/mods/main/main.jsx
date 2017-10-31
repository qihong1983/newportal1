            var MavTopComponent = React.createClass({
                    render:function (){
                        return (
        <aside id="sidebar_left" className="sidebar-light light affix">
            <div className="sidebar-left-content nano-content">
                <ul className="nav sidebar-menu">
                    <li>
                        <a className="accordion-toggle" href="#">
                            <span className="fa fa-table"></span>
                            <span className="sidebar-title">报表</span>
                            <span className="caret"></span>
                        </a>
                        <ul className="nav sub-nav">
                            <li>
                                <a href="layout_sidebar-left-static.html">
                            VP日报 
                      </a>
                            </li>
                            <li>
                                <a href="layout_sidebar-left-fixed.html">
                      私人报表 </a>
                            </li>
                        </ul>
                    </li>
                    <li className="active">
                        <a className="accordion-toggle menu-open" href="#">
                            <span className="fa fa-columns"></span>
                            <span className="sidebar-title">BI</span>
                        </a>
                    </li>
                    <li>
                        <a className="accordion-toggle" href="#">
                            <span className="icon-applications"></span>
                            <span className="sidebar-title">应用</span>
                            <span className="caret"></span>
                        </a>
                        <ul className="nav sub-nav">
                            <li>
                                <a href="layout_sidebar-left-static.html">
                      新闻客户端 </a>
                            </li>
                            <li>
                                <a href="layout_sidebar-left-fixed.html">
                      跟帖 </a>
                            </li>
                            <li>
                                <a href="layout_sidebar-left-widgets.html">
                      网易微博 </a>
                            </li>
                            <li>
                                <a href="layout_sidebar-left-minified.html">
                      网易哒哒 </a>
                            </li>
                            <li>
                                <a href="layout_sidebar-left-light.html">
                       bobo交友 </a>
                            </li>
                            <li>
                                <a href="layout_sidebar-right-static.html">
                      网易花田  </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="accordion-toggle" href="#">
                            <span className="fa fa-globe"></span>
                            <span className="sidebar-title">后台</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
                        )
                    }
                });


var MavTopHeader = React.createClass({
	render: function () {
		return (
			<header id="topbar" className="affix">
                <div className="topbar-left">
                    <div className="col-md-7 pn">
                        <ol className="breadcrumb">
                            <li className="crumb-active">
                                <a href="dashboard.html">VP日报</a>
                            </li>
                            <li className="crumb-trail">开机画面</li>
                        </ol>
                    </div>
                </div>
                <form className="form-horizontal topbar-right col-md-4" role="form">
                    <div className="form-group mbn">
                        <label className="col-md-3 control-label pt5" htmlFor="daterangepicker1">日期选择</label>
                        <div className="col-md-6 pn pr10">
                            <input type="text" className="form-control input-sm pull-right" name="daterange" id="daterangepicker1" />
                        </div>
                        <a href="#" className="btn btn-default btn-sm light fw600 col-md-3 btn-primary" id="j_createDataBlock">
                            <span className="fa fa-check pr5"></span> 创建数据块 </a>
                    </div>
                </form>
            </header>
		)
	}
});








//jstree


var JsTreeComponent = React.createClass({
	render: function () {
		return (
			<div className="panel panel-primary panel-border top">
                    <div className="panel-heading">
                        <span className="panel-title"> VP日报</span>
                        <span className="panel-controls">
                            <a href="#" className="panel-control-loader"></a>
                            <a href="#" className="panel-control-collapse text-primary"></a>
                        </span>
                    </div>
                    <div className="panel-body admin-form">
                        <div className="row mb15">
                            <div className="col-xs-8">
                                <input className="form-control" name="search" placeholder="过滤..." />
                            </div>
                            <div className="col-xs-4">
                                <button className="btn btn-primary mr10 ph20" id="btnResetSearch"> 清除
                                    <i className="fa fa-remove pl10"></i>
                                </button>
                                <span id="matches"></span>
                            </div>
                        </div>
                        <div>
                        <p>
                            <span className="option-group field">
                                <label htmlFor="hideMode" className="option option-primary mr15">
                                    <input type="checkbox" id="hideMode" name="hideMode" defaultValue="checked" checked="" />
                                    <span className="checkbox"></span>隐藏没过滤掉的节点</label>
                            </span>
                        </p>
                        <hr className="short alt mv15" />
                        <p id="sampleButtons">
                        </p>
                        </div>
                        <div id="tree8">
                        </div>
                    </div>
                </div>
		) 
	}

});

//panel区
var PanelComponent = React.createClass({
	render: function () {
		return (
<div className="panel col-md-8 ">
                        <div className="panel-heading">
                            <span className="panel-icon pn"></span>
                            <span className="panel-title"> K V 数据</span>
                            <span className="panel-controls">
                            <a href="#" className="panel-control-loader"></a>
                            <a href="#" className="panel-control-remove"></a>
                            <a href="#" className="panel-control-title"></a>
                            <a href="#" className="panel-control-color"></a>
                            <a href="#" className="panel-control-collapse"></a>
                            <a href="#" className="panel-control-fullscreen"></a>
                        </span>
                        </div>
                        <div className="panel-body ">
                            <div className="row">
                                <div className="col-md-12 pb15">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm active btn-default bg-light light">
                                            <i className="icon portal icon-table fs12"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-default bg-light light">
                                            <i className="icon portal icon-chart10 fs12"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-default bg-light light">
                                            <i className="icon portal icon-line fs12"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-default bg-light light">
                                            <i className="icon portal icon-pie fs12"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-default  bg-light light">
                                            <i className="icon portal icon-funnel fs12"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="alt short mtn mb15" />
                            <div className="row">
                                <div className="col-md-4">
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label htmlFor="multiselect2" className="col-md-4 control-label pt5">Keys</label>
                                            <div className="col-md-8">
                                                <select id="multiselect2" multiple="multiple">
                                                    <option defaultValue="cheese">Cheese</option>
                                                    <option defaultValue="tomatoes">Tomatoes</option>
                                                    <option defaultValue="mozarella">Mozzarella</option>
                                                    <option defaultValue="mushrooms">Mushrooms</option>
                                                    <option defaultValue="pepperoni">Pepperoni</option>
                                                    <option defaultValue="onions">Onions</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label htmlFor="multiselect3" className="col-md-4 control-label pt5">Groups</label>
                                            <div className="col-md-8">
                                                <select id="multiselect3" multiple="multiple">
                                                    <option defaultValue="cheese">Cheese</option>
                                                    <option defaultValue="tomatoes">Tomatoes</option>
                                                    <option defaultValue="mozarella">Mozzarella</option>
                                                    <option defaultValue="mushrooms">Mushrooms</option>
                                                    <option defaultValue="pepperoni">Pepperoni</option>
                                                    <option defaultValue="onions">Onions</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label htmlFor="multiselect4" className="col-md-4 control-label pt5">Values</label>
                                            <div className="col-md-8">
                                                <select id="multiselect4" multiple="multiple">
                                                    <option defaultValue="cheese">Cheese</option>
                                                    <option defaultValue="tomatoes">Tomatoes</option>
                                                    <option defaultValue="mozarella">Mozzarella</option>
                                                    <option defaultValue="mushrooms">Mushrooms</option>
                                                    <option defaultValue="pepperoni">Pepperoni</option>
                                                    <option defaultValue="onions">Onions</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr className="alt short mtn mb15" />
                            <div className="resize">
                                <div className="row of-x-h of-y-a" style={{width:"100%",height:"100%"}}>
                                    <div className="col-md-12">
                                        <table className="table table-striped table-hover" id="datatable" style={{width:"100%",cellspacing:"0"}}>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                </tr>
                                                <tr>
                                                    <td>Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>22</td>
                                                    <td>2012/03/29</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr>
                                                    <td>Brielle Williamson</td>
                                                    <td>Integration Specialist</td>
                                                    <td>New York</td>
                                                    <td>61</td>
                                                    <td>2012/12/02</td>
                                                    <td>$372,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Sonya Frost</td>
                                                    <td>Software Engineer</td>
                                                    <td>Edinburgh</td>
                                                    <td>23</td>
                                                    <td>2008/12/13</td>
                                                    <td>$103,600</td>
                                                </tr>
                                                <tr>
                                                    <td>Quinn Flynn</td>
                                                    <td>Support Lead</td>
                                                    <td>Edinburgh</td>
                                                    <td>22</td>
                                                    <td>2013/03/03</td>
                                                    <td>$342,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Haley Kennedy</td>
                                                    <td>Senior Marketing Designer</td>
                                                    <td>London</td>
                                                    <td>43</td>
                                                    <td>2012/12/18</td>
                                                    <td>$313,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Tatyana Fitzpatrick</td>
                                                    <td>Regional Director</td>
                                                    <td>London</td>
                                                    <td>19</td>
                                                    <td>2010/03/17</td>
                                                    <td>$385,750</td>
                                                </tr>
                                                <tr>
                                                    <td>Michael Silva</td>
                                                    <td>Marketing Designer</td>
                                                    <td>London</td>
                                                    <td>66</td>
                                                    <td>2012/11/27</td>
                                                    <td>$198,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Paul Byrd</td>
                                                    <td>Chief Financial Officer (CFO)</td>
                                                    <td>New York</td>
                                                    <td>64</td>
                                                    <td>2010/06/09</td>
                                                    <td>$725,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Gloria Little</td>
                                                    <td>Systems Administrator</td>
                                                    <td>New York</td>
                                                    <td>59</td>
                                                    <td>2009/04/10</td>
                                                    <td>$237,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Bradley Greer</td>
                                                    <td>Software Engineer</td>
                                                    <td>London</td>
                                                    <td>41</td>
                                                    <td>2012/10/13</td>
                                                    <td>$132,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Dai Rios</td>
                                                    <td>Personnel Lead</td>
                                                    <td>Edinburgh</td>
                                                    <td>35</td>
                                                    <td>2012/09/26</td>
                                                    <td>$217,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Jenette Caldwell</td>
                                                    <td>Development Lead</td>
                                                    <td>New York</td>
                                                    <td>30</td>
                                                    <td>2011/09/03</td>
                                                    <td>$345,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>  
		)
	}
});


//TopHeaderComponent
var TopHeaderComponent = React.createClass({
	render: function () {
		return (
<header className="navbar navbar-fixed-top navbar-shadow bg-dark">
            <div className="navbar-branding">
                <a className="navbar-brand" href="dashboard.html">
                    <b className="icon portal icon-cnneteaseweibo fs35 text-primary"></b> Portal
                </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li className="menu-divider hidden-xs">
                    <i className="fa fa-circle"></i>
                </li>
                <li className="dropdown menu-merge">
                    <a href="#" className="dropdown-toggle fw600 p15" data-toggle="dropdown"> <img src="http://assets.netease.com/img/avatars/5.jpg" alt="avatar" className="mw30 br64 mr15" /> jbqihong
                        <span className="caret caret-tp hidden-xs"></span>
                    </a>
                    <ul className="dropdown-menu list-group dropdown-persist w250" role="menu">
                        <li className="list-group-item">
                            <a href="#" className="animated animated-short fadeInUp">
                                <span className="fa fa-envelope"></span> <em>bjqihong@netease.com</em>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="animated animated-short fadeInUp">
                                <span className="fa fa-gear"></span> <em>超级管理员</em> </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="animated animated-short fadeInUp">
                                <span className="fa fa-power-off"></span> 退出 </a>
                        </li>
                    </ul>
                </li>
                <li id="toggle_sidemenu_t">
                    <span className="fa fa-caret-up"></span>
                </li>
            </ul>
        </header>
		)
	}
});




            



            var MainComponent = React.createClass({
                render:function () {
                	return (<div>
                                
        			<TopHeaderComponent />

        				<MavTopComponent  />

    					<section id="content_wrapper">
    						
    						<MavTopHeader  />
        
        					<section id="content" className="animated fadeIn">

        						<JsTreeComponent />

		                		<div className="row handle">
		                    		<PanelComponent />
		                		</div>

			            	</section>
			        	
			        	</section>
			        
			        </div>
                    
                  	)
                },
                componentDidMount: function () {
                	console.log($('.panel-control-collapse'));
                	console.log($);


                	//切换加载
			        var toggleEvent = function(self) {
			            self.addClass('panel-loader-active');
			            setTimeout(function() {
			                self.removeClass('panel-loader-active');
			            }, 650);
			        }

			        //最小化与最大化
			        $('.panel-control-collapse').off('click').on('click', function(e) {
			            var self = $(this);

			            var panel = self.parents('.panel');
			            toggleEvent(panel);
			            if (!self.parents('.panel').hasClass('panel-collapsed')) {
			                self.parents('.panel').addClass('panel-collapsed');
			                self.parents('.panel').find('.panel-body').hide();
			                return;
			            } else {
			                self.parents('.panel').removeClass('panel-collapsed');
			                self.parents('.panel').find('.panel-body').show();
			            }

			        });

			        //日期选择(开始日期和结束日期范围)
			                $('#daterangepicker1').daterangepicker({
			            showWeekNumbers: true, //是否显示第几周 
			            format: 'YYYY-MM-DD',
			            locale: {
			                applyLabel: '确定',
			                cancelLabel: '取消',
			                fromLabel: '起始时间',
			                toLabel: '结束时间',
			                customRangeLabel: '自定义',
			                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
			                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
			                    '七月', '八月', '九月', '十月', '十一月', '十二月'
			                ],
			                firstDay: 1
			            }
			        });


			        //x、 y、 group
			        $('#multiselect2').multiselect();
			        $('#multiselect3').multiselect();
			        $('#multiselect4').multiselect();

			        
                }
            });








            ReactDOM.render(<MainComponent />,$('#main')[0]);

