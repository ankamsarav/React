
  var Demo=React.createClass({
  render:function(){
  	return(
      <div className="container">
	   <h2>Choose your Airline</h2>
      <form>
             <p className="radio">
                 <label>
                    <input type="radio" name="operator" value="Indigo Airlines" /> Indigo Airlines
                 </label>
            </p>
            <p className="radio">
                <label>
                   <input type="radio" name="operator" value="Jet Airways" />Jet Airways
               </label>
            </p>
            <p className="radio">
                <label>
                   <input type="radio" name="operator" value="Air India" />Air India
                </label>
            </p>
            <p className="radio">
               <label>
                    <input type="radio" name="operator" value="Spicejet" />Spicejet Airlines
               </label>
            </p>
            <p className="form-group radio">
               <label>
                    <input type="radio" name="operator" value="Others" />Others
                </label>
                <label className="form-inine">Specify Airline  
                    <input type="text" name="other" />
                </label>
            </p>
        <p><input type="submit" className="btn btn-primary"/></p>
        </form>
     </div>
     )
  }
});
     React.render(<Demo/>,
      document.getElementById('container'));


      

	  
      
 