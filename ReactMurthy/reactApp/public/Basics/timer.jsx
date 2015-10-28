var Greet=React.createClass({

/*this  function generates virual DOM */

	render:function(){
		return(   // return HTML node
			<p>
			 <h1 className="well"> {this.props.data.toTimeString()}</h1>
			 Name : <input type="text" placeHolder="Your name here"/> 
			 <a href="http://www.facebook.com">Facebook</a>
			// <p><input type="submit" className="btn btn-primary" /></p>
			 </p>
			)
	}
});

setInterval(function(){
	React.render(<Greet data={new Date()}/>,
	document.getElementById("container"))
},500);