 
 var RadioOtherOption=React.createClass({
	render:function(){
		return(			
              <p className="form-group radio">
               <label>
                    <input type="radio" name="operator" value="Others"/>Others
                </label>
                <label className="form-inine">Specify Airline  
                    <input type="text" name="other" />
                </label>
            </p>      	
			)
	}
})

var  RadioOption=React.createClass({
	render:function(){
		return(
			<p className="radio">
                 <label>
                    <input type="radio" name="operator" value={this.props.value} /> 
                    {this.props.children}
                 </label>
            </p>
			)
	}
})


  var Demo=React.createClass({
  render:function(){
  	return(
      <div className="container">
	   <h2>Choose your Airline</h2>
      <form>
             <RadioOption value="Jet Airways">
                 Jet Airways Limited
             </RadioOption>

             <RadioOption value="Air India">
                 Indian Airlines
             </RadioOption>

              <RadioOption value="SpiceJet">
                 SpiceJet Airlines
             </RadioOption>

           <RadioOtherOption/>

           <p><input type="submit" className="btn btn-primary"/></p>
        </form>
     </div>
     )
  }
});

React.render(<Demo/>,
      document.getElementById('container')
      );


      

	  
      
 