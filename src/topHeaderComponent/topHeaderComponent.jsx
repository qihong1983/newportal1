/**
 * 吊顶模块
 * @module TopHeaderComponent
 */
var TopHeaderComponent = React.createClass({
	/**
     * 渲染函数
     * @medthod render
     */
	render: function () {
		return (
            <header className="navbar navbar-fixed-top navbar-shadow bg-dark">
                <div className="navbar-branding">
                    <a className="navbar-brand" href="dashboard.html">
                        <b className="icon portal icon-cnneteaseweibo fs35 text-primary"></b> PORTAL
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
	},
	/**
	 * DOM操作
	 * @method componentDidMount
	 */
    componentDidMount: function () {

        var Body = $('body');

    	var sidebarTopToggle = function() {

         	// Toggle sidebar state(open/close)
         	Body.toggleClass('sb-top-collapsed');

      	};

    	$("#toggle_sidemenu_t").on('click', sidebarTopToggle);

    }
});

export default TopHeaderComponent;