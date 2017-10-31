//主导航
import MavTopComponent from './navTop/navTop.jsx';
//顶部浮动显示条
import MavTopHeader from './mavTopHeader/mavTopHeader.jsx';
//内容区无级tree
import JsTreeComponent from './jsTreeComponent/jsTreeComponent.jsx';
//panel区
import PanelComponent from './panelComponent/panelComponent.jsx';
//页头
import TopHeaderComponent from './topHeaderComponent/topHeaderComponent.jsx';

/**
 * 入口文件模块
 * @module PanelComponent
 * @requires multiselect、resizable、PNotify、sortable
 */
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

    }
});


ReactDOM.render(<MainComponent />,$('#main')[0]);
