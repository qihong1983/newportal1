var App =  React.createClass({
  render() {
  	
	console.log(this.props, 'this.props'); 
    return (<div>
      {this.props.children}
    </div>);
  }
});


module.exports = App;
