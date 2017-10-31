

/**
 * 左侧导航
 * @module JsTreeComponent
 * @requires fancytree
 */

var JsTreeComponent = React.createClass({
	/**
	 * @method getInitialState
	 * @return {Object} 
	 */
	getInitialState: function() {
		return {
	        checked: true,
	        name: name
	    }
	},
	/**
	 * @method handleChanged
	 * @param e {Object}
	 */
	handleChanged:function(e) {
	    var checked = e.target.checked;
	    this.setState({checked:checked});
	},
	/** 
	 * 渲染函数
	 * @method render
	 */
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
                            <div className="option-group field">

                                <label htmlFor="hideMode" className="option option-primary mr15">
                                    <input type="checkbox" id="hideMode" name="hideMode" 
                                    	value={this.props.value} 
                                    	checked={this.props.checked}
                    					onChange={this.handleChanged} 
                    				/>
                                    <span className="checkbox"></span>隐藏没过滤掉的节点</label>
                            </div>
                        <hr className="short alt mv15" />
                        <p id="sampleButtons">
                        </p>
                        </div>
                        <div id="tree8">
                        </div>
                    </div>
                </div>
		) 
	},
	/**
	 * 渲染完获取dom操作
	 * @method componentDidMount
	 */
    componentDidMount: function () {
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


        $("#tree8").fancytree({

            icons: false, // Display node icons.
            clickFolderMode: 2,
            extensions: ["filter"],
            quicksearch: true,
            source: {
                url: "http://assets.netease.com/widgets/fancytree/ajax-tree-local.json"
            },
            filter: {
                mode: "hide",
                autoApply: true
            },
            activate: function(event, data) {
                //        alert("activate " + data.node);
            },
            lazyLoad: function(event, data) {
                data.result = {
                    url: "http://assets.netease.com/widgets/fancytree/ajax-sub2.json"
                }
            }
        });
        var tree = $("#tree8").fancytree("getTree");
        /*
         * Event handlers for our little demo interface
         */
        $("input[name=search]").keyup(function(e) {
            var n,
                leavesOnly = $("#leavesOnly").is(":checked"),
                match = $(this).val();

            if (e && e.which === $.ui.keyCode.ESCAPE || $.trim(match) === "") {
                $("button#btnResetSearch").click();
                return;
            }
            if ($("#regex").is(":checked")) {
                // Pass function to perform match
                n = tree.filterNodes(function(node) {
                    return new RegExp(match, "i").test(node.title);
                }, leavesOnly);
            } else {
                // Pass a string to perform case insensitive matching
                n = tree.filterNodes(match, leavesOnly);
            }
            $("button#btnResetSearch").attr("disabled", false);
            $("span#matches").text("(" + n + " 个报表)");
        });

        $("button#btnResetSearch").click(function(e) {
            $("input[name=search]").val("");
            $("span#matches").text("");
            tree.clearFilter();
        }).attr("disabled", true);

        tree.options.filter.mode = $("input#hideMode").is(":checked") ? "hide" : "dimm";
        tree.clearFilter();

        $("input#hideMode").change(function(e) {
            tree.options.filter.mode = $(this).is(":checked") ? "hide" : "dimm";
            tree.clearFilter();
            $("input[name=search]").keyup();
        });
        $("input#leavesOnly").change(function(e) {
            // tree.options.filter.leavesOnly = $(this).is(":checked");
            tree.clearFilter();
            $("input[name=search]").keyup();
        });
        $("input#regex").change(function(e) {
            tree.clearFilter();
            $("input[name=search]").keyup();
        });

        


    }




});

export default JsTreeComponent;