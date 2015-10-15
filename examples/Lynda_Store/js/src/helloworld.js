	/***
	*	
	***/
	var Helloworld = React.createClass({

		render:function(){
			return (
					<div>
						<h1>Hello  World</h1>
						<p>This is second line</p>
					</div>
				);
		}
	});

	React.render(<Helloworld />,document.body);