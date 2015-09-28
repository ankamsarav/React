 React.JS 
 
-> component Name should starts with CAPS
-> return content should be in HTML tag
-> @React.render 
	- can specity component name as 
		<ComponentName /> 
			(or) 
		<ComponentName></ComponentName>
	- inorder to render same component multiple times need to wrap component pointers in another HMTL tag
		React.render(
			<div id="wrapper">
				<HeaderComponent name ="Naveen" bike="Harley Davidson" />
				<HeaderComponent name ="Sam" bike="Yamaha"/>
				<HeaderComponent name ="Aravind" bike="Duke"/>
				<HeaderComponent name ="Sagar" bike="Indian"/>
			</div>
			,document.getElementById('header'));
	- 