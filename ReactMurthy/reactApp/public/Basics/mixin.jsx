var SetIntervalMixin={
  componentWillMount:function(){
  console.log("Component is going to be mounted now")
    this.intervals=[];
  },
  setInterval:function(){
  this.intervals.push(setInterval.apply(null,arguments))
  },
  componentWillUnmount:function(){
  console.log("Component Unmounted")
  this.intervals.map(clearInterval)
  }
};

var TickTock=React.createClass({
  mixins:[SetIntervalMixin],// use the mixin

  getInitialState:function(){
  console.log("Initial state set");
    return {seconds:0};
  },
  componentDidMount:function(){
  console.log("tick Tock is mounted")
    this.setInterval(this.tick,1000);// Call a method on mixin
  },
  tick:function(){
  console.log(seconds)
  this.setState({seconds:this.state.seconds+1});
  },
  render:function(){
  return(
  <p>
     React  has been running for  {this.state.seconds} seconds.
	 </p>
	 );
  }
});

React.render(<TickTock/>,
       document.getElementById("container")
	   );