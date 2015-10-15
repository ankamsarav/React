	var Note = React.createClass({
		getInitialState:function(){
			return {editing : false};
		},
		edit:function(){
			this.setState({editing: true});
		},
		save :function(){
			this.setState({editing: false});
		},
		remove:function(){
			
		},
		normalDisplay:function(){
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
		},
		editabledisplay:function(){
			return(
					<div className="note">
						<textarea className="form-control" defaultValue ={this.props.children}></textarea>
						<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"/>
					</div>
				);
		},
		render:function(){
			if(this.state.editing){
				return this.editabledisplay();
				alert("Noraml");
			}else{
				return this.normalDisplay();
				alert("Editable");
			}

		}
	});


	React.render(<Note>Hello World</Note>,document.body);