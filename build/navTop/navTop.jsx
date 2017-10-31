//顶部导航
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

//导出组件
export default MavTopComponent;
