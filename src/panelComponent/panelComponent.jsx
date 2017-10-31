import Mock from '../mock/mock.jsx';

/**
 * panel模块
 * @module PanelComponent
 * @requires multiselect、resizable、PNotify、sortable
 */
var PanelComponent = React.createClass({
    /**
     * 渲染函数
     * @medthod render
     */
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
	},
    /**
     * DOM操作
     * @method componentDidMount
     */
    componentDidMount: function () {

        console.log(location, 'location');

        var width = $('.handle').width();

        var width_length = width / 12;

        $(window).on('resize', function(e) {
            width = $('.handle').width();
            width_length = width / 12;
        });

        $(".resize").resizable({
            //animate: true,
            helper: "ui-resizable-helper",
            grid: [width_length, 20],
            minWidth: 150,
            stop: function(event, ui) {

                // var width = ui.element.parent('div').width();

                var col_md = 0;

                if (Math.ceil(ui.size.width / width_length) >= 12) {
                    col_md = "col-md-" + 12;
                } else if (Math.ceil(ui.size.width / width_length) <= 0) {
                    col_md = "col-md-" + 0;
                } else {
                    col_md = "col-md-" + Math.ceil(ui.size.width / width_length);
                }

                var panel = ui.element.parents('.panel');


                var GRID = 12;

                for (var i = 0; i < GRID; i++) {
                    if (panel.hasClass('col-md-' + i)) {
                        panel.removeClass('col-md-' + i);
                    }
                }


                panel.addClass(col_md);

                ui.element.css('width', 'auto');

                        $.ajax({
                            url: 'http://a.cn/api/getlist.do',
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

            }
        });

        $(".handle").sortable({
            connectWith: ".handle",
            handle: ".panel-heading"
        });
        $(".handle").disableSelection();


        //x、 y、 group
        $('#multiselect2').multiselect({
            numberDisplayed:1
        });
        $('#multiselect3').multiselect({
            numberDisplayed:1
        });
        $('#multiselect4').multiselect({
            numberDisplayed:1
        });


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
    }
});


export default PanelComponent;