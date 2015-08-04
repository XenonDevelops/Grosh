
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','$state','groupService','$stateParams','$timeout'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,$state,groupService,$stateParams,$timeout){
	var html = document.querySelector('html');
	html.id = 'group'
	$scope.currentGroup='';
	$scope.groupId = '';
	$scope.isAdmin = false;
    $scope.back = ''

	init();
	function init(){
	if($stateParams.group){
		console.log('how many times')
		$scope.groupId = $stateParams.group;
		groupService.get($stateParams.group)
		.then(function(response){
			$scope.currentGroup=response.data;
			$scope.back = $scope.currentGroup.url_image;

			if($scope.currentGroup.administrators[0]===loginService.getLoggedUser()._id){
				$scope.isAdmin = true;
			}
		})
		.catch(function(response){
			console.error(response.data)
		})
	}
}
	$scope.group = {
		name:'',
		description:''
	}
	$scope.currentUser = '';

	$scope.createGroup = function(){
		if($scope.group !== '' && $scope.group.description !== ''){
			groupService.add(loginService.getLoggedUser()._id,$scope.group)
			.then(function(response){
				$scope.group = {
					name:'',
					description:''
				}			
				$state.go('group',{group:response.data._id});
				alert('Group Created Successfully!')
			})
			.catch(function(response){
				console.error(response.data)
			})

		}

	}
	$scope.image = {
		url:''
	}

	$scope.addUrlImage = function(){
		if($scope.image.url !== ''){
			groupService.addImgUrl($scope.currentGroup._id,$scope.image.url)
			.then(function(response){
				$state.go('group',{group:$scope.groupId},{reload: true})
			})
			.catch(function(response){
				console.error(response.data)
			})
		}else{
			alert('Please complete iamge url field')
		}
	}


}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;