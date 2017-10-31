//首字母必需是大写
var FirstComponentReact = React.createClass({
    getInitialState: function() {
        return {
            mes: this.props.value
        }
    },
    render: function() {
        return ( < div >
            < h1 > { this.props.title } < /h1> 
                <input type = "text" value = { this.state.mes } onChange = { this.changeHandle } /> 
                <input type = "button" value = { this.props.sendName } />  
                <p> { this.state.mes } </p> 
            < /div>
        )
    },
    changeHandle: function(ev) {
        this.setState({ mes: ev.target.value });
    },
    /**
     * DOM操作
     * @method componentDidMount
     */
    componentDidMount: function() {

    }
);

var obj = {
    title: "小洪你落伍了!!",
    sendName: "提交",
    value: "值值值值"
}

ReactDOM.render( 
    <FirstComponentReact {...obj } />,
    document.getElementById("demo"),
    function() {
        console.log("页面渲染完成");
    }
)
