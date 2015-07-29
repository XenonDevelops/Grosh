
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','$state','groupService'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,$state,groupService){
	var html = document.querySelector('html');
	html.id = 'mygroups'
	$scope.groups=[];

	var currentUser = '';

	if(loginService.loggedIn()){
		currentUser = loginService.getLoggedUser();
		refreshCreatedGroups();

	}


	$scope.createdGroups = function(){
		document.getElementById("joinedGroups").className = "tile";
		document.getElementById("createdGroups").className = "tile active-profile";
		refreshCreatedGroups();
	}

	$scope.joinedGroups = function(){
		document.getElementById("createdGroups").className = "tile";
		document.getElementById("joinedGroups").className = "tile active-profile";
		refreshJoinedGroups();
	}



	function refreshCreatedGroups(){
		groupService.getGroupsCreated(currentUser._id)
		.then(function(response){
			$scope.groups=response.data;
		})
		.catch(function(response){
			console.error(response.data);
		})
	}

	function refreshJoinedGroups(){
		groupService.getGroupsJoined(currentUser._id)
		.then(function(response){
			$scope.groups=response.data;
		})
		.catch(function(response){
			console.error(response.data);
		})
	}

	$scope.getUrlByGroup = function(group){

		return 	{
   	 "background": 'linear-gradient( to bottom, rgba(0, 0, 0, 0), rgba(1, 140, 127, 0.84) ),url( '+ group.url_image +')',
    	"background-size": "cover"
    	}
	}

}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;