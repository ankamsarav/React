 React.JS 
 
-> component Name should starts with CAP
-> return content should be in HTML tag
-> @React.render 
	- Can specity component name as 
		<ComponentName /> 
			(or) 
		<ComponentName></ComponentName>
	- Inorder to render same component multiple times need to wrap component name in any another HMTL tag
		React.render(
			<div id="wrapper">
				<HeaderComponent name ="Naveen" bike="Harley Davidson" />
				<HeaderComponent name ="Sam" bike="Yamaha"/>
				<HeaderComponent name ="Aravind" bike="Duke"/>
				<HeaderComponent name ="Sagar" bike="Indian"/>
			</div>
			,document.getElementById('header'));
	- 