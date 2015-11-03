what is react.?
	- React is inroduced to create user interfaces, Usinf JavaScript
	- Build and Maintained by FACEBOOM
	- just V in M"V"C - just takes cares about view alone
	- its useful when we are building the UI interfaces with frequent change in the serializeData
		- when eveer data changes the component will update automatically 
		- it wil fit into any existing libraries like backbone, Ember, Angular

What is JSX :
	- JSX is JavaScript as XML
	- it provices easy ways to write code in JS/XML format
	- JSXTransformers library is used to convert JSX code into Native JavaScript code 

Componet Lifecycle :

	1) Mounting 
		- thes are the three functions are invoked immediately component is mounted
		- getInitialState: function() {} // its kind of default value setting
		- componentWillMount: function() {} // before component is mounted
		- componentDidMount: function() {} // after component is mounted 
		// check Mounting.html for more info

	2) Updating
		- componentWillReceiveProps: function(nextProps) {},
		- shouldComponentUpdate: function(nextProps, nextState) {},
		- componentWillUpdate: function(nextProps, nextState) {},
		- componentDidUpdate: function(prevProps, prevState) {},
	3) Unmounting
		- componentWillUnmount: function() {},
		- 
componetState :
	- State talks about the state of the component // Its kind of flag 
	- it can be boolean / String // boolean is suggested - toggling can be easy just by !state
	- try to minimalize the state in the component 
	- use only it has state if any flag is required

	// how to set default state
		getInitialState: function() {
			return {
				defaultState: true
			};
		}

	// how to udpate the state 
		this.setState({
			defaultState:false 
		});
	// how to get state 

		this.state.defaultState
		{this.state.defaultState}


DataBinding :
	- Angular, backbone uses dirty check and on change events to update the DOM 
	- JS is not reactive 
		- DOM inheriantly state full
		- DATA BINDING is polyfill for reactjs and DOM

	- React used Virtual DOM 
		- Less leaky polyfill
		- which makes JS and DOM as reactive

Events : 
	- Events are build using their own EVENT syntethic system

Drawbacks : 
	- One way data flow,
		- flow of components are like from parent to child relation 
		- if parent state has changed, component will get refresh, including child components 
		- in same way if the child state has changed, there is no way to let parent know child has changed
	- State can be modified only on that component
		- no way to change state from one component to other component (default) 

















