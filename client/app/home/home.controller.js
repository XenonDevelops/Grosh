
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','$state'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,$state){
	var html = document.querySelector('html');
	html.id = 'home'





}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;