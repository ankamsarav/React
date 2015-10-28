var Comp= React.createClass({
    doSomething:function(){
      alert("hi "+this.props.children)
    },
    render:function(){
        return (
          <div>
            <h3>{this.props.user} working as 
            {this.props.job} in {this.props.children} </h3>
            <a href='#' onClick={this.doSomething}>More</a>
        </div>
         )        
       }
});
React.render(
  // for multiple components, wrap in div
  <div>
  <Comp user='Sriram' job='Engineer'>
      Pratibha Infotek in Hyderabad</Comp>
  <Comp user='Kiran' job='Officer'>Sapient of Banglore </Comp>
  <Comp user='Lalitha' job='Manager'>
       Bank of America  at Chennai</Comp>
  </div>,
  document.getElementById('container'))
