/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$q','$location','$injector'];
/*
The controller's functionality
*/
var factory = function($q,$location,$injector){

        var lastState = "login";
        var responseError = function (response) {
        var loginService = $injector.get('loginService');

            if (response.status == 401 || response.status == 400) {
               //        lastState = $state.name;
                if(loginService.logout()){
                  $location.path("/");
                }

            }
            if (response.status == 500) {
                if(loginService.logout()){
                  $state.go('login');
                }
            }
            return $q.reject(response);
        };
        var redirectPostLogin = function() {
            $location.path(lastPath);
            lastState = "login";
        };
        return {
            responseError: responseError,
            redirectPostLogin:redirectPostLogin
        }

}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;