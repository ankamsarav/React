
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

var RadioOptionGroup=React.createClass({
  render:function(){
    return (
      <div>
        {this.props.options.map(function(option){
          return (
              <RadioOption value="option.value" key={option.value}>
                {option.label}
              </RadioOption>
            )
          }
        )}
        {this.props.other ? <RadioOtherOption/>:<div/>}
       
        </div>
      );
  }
});

  var Demo=React.createClass({
  render:function(){

    var radioOptions=[
      {value:'Indigo', label:'Indigo Airlines'},
      {value:'Air India',label:'Indian Airlines'},
      {value:'Jet Airways',label:'Jet Airways'},
      {value:'SpiceJet', label:'SpiceJet Airlines'}
      ];

  	return(
      <div className="container">
	   <h2 >Choose your Airline</h2>
      <form>
            <RadioOptionGroup other={false} options={radioOptions}/>       

           <p><input type="submit" className="btn btn-primary"/></p>
        </form>
     </div>
     )
  }
});

React.render(<Demo/>,
      document.getElementById('container')
      );


      

	  
      
 