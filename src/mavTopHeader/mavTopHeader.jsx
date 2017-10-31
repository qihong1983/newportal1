/**
 * 左侧导航
 * @module MavTopHeader
 * @requires daterangepicker
 */
var MavTopHeader = React.createClass({
    /**
     * @method getInitialState
     * @return {Object} 
     */
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
	},
    /**
     * DOM操作
     * @method componentDidMount
     */
    componentDidMount: function () {


        console.log(1);
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
    }

});

export default MavTopHeader;