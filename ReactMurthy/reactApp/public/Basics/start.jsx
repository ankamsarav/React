var Counter = React.createClass({
    incrementCount: function(){
        this.setState({
            count: this.state.count + 1
        });
    },
    reset: function(){
        this.setState({
            count: 0
        });
    },
    getInitialState: function(){
        return {
            count: 0
        }
    },
    render: function(){
        return (
          <div className="counter">
            <h1>{this.state.count}</h1>
                <button className='btn-primary'
            type="button" onClick={this.incrementCount}>
            Increment</button>
             <button className='btn-danger' type="button" 
             onClick={this.reset}>Reset</button>
          </div>
      );
    }
});

React.render(<Counter/>,
 document.getElementById('container'));