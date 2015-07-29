
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','loginService','$stateParams','userService' ];
/*
The controller's functionality
*/
var controller = function($scope,$state,loginService,$stateParams,userService){

    $scope.currentUser = '';
    init();
    $scope.properties = {
      "background": "linear-gradient( to bottom, rgba(0, 0, 0, 0), rgba(1, 140, 127, 0.84) ),url('http://daphne-scott.com/wp-content/uploads/2014/03/Group-Sharing-good-news-Medium.jpg')",
    "background-attachment": "fixed",
    "background-size": "cover"
    }
    function init(){
       var current = loginService.getLoggedUser();

       userService.get($stateParams.profile)
       .then(function(response){
           $scope.currentUser = response.data;

       })
       .catch(function(response){
          console.log(response.data);
       })


       if(current){
         $scope.currentUser = {name:current.name,lastName:current.lastName,email:current.email};
       }else{
          $state.go('login');
       }
    }

}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;