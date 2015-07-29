
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','loginService','$rootScope'];
/*
The controller's functionality
*/
var controller = function($scope,$state,loginService,$rootScope){
    $scope.user = loginService.getLoggedUser();

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams,fromState,fromParams){

      $scope.user = loginService.getLoggedUser(); 
  });
    $scope.closeThis = function () {
      if($scope.sideMenuOpen){
        $scope.sideMenuOpen = false;
        $scope.$apply();
      }        
    }

    $scope.menuBarActive = function(){
        if(loginService.loggedIn()){
              return 'menu-bar-active';
              $scope.user = {name:current.name,lastName:current.lastName,email:current.email};
        }
        return 'menu-bar-inactive';
    }

    $scope.sideMenuOpen = false;
	  $scope.openSideMenu = function(){
        $scope.sideMenuOpen = ! $scope.sideMenuOpen;
    }
    
    $scope.isSideMenuOpened = function(){
      console.log($scope.sideMenuOpen);
      if($scope.sideMenuOpen){
        return 'menu open';
      }
      return '';
    }

    $scope.logout = function(){
      $scope.sideMenuOpen = false;
      if(loginService.logout()){
        $state.go('login');
      }
    }

    $scope.viewProfile = function(){
      $state.go('profile',{profile:$scope.user._id});
    }


}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;