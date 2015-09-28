	var Note = React.createClass({
		edit:function(){
			alert("Editing");
		},
		remove:function(){
			alert("Removing");
		},
		render:function(){
			return(
					<div className="note">
						<p>{this.props.children}</p>
						<button 
							onClick={this.edit}
							className="btn btn-primary glyphicon glyphicon-pencil"/>
						
						<button 
							onClick={this.remove}
							className="btn btn-danger glyphicon glyphicon-trash "/>
						
					</div>
				);
		}
	});


	React.render(<Note>Hello World</Note>,document.body);