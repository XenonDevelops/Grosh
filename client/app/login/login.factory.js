/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$http','localStorageService','formEncode','$state'];
/*
The controller's functionality
*/
var factory = function($http,localStorageService,formEncode,$state){


        var USERKEY = "user";
            var profile = {
                _id:'',
                name: '',
                lastName:'',
                email:'',
                token: ''
            };
        var setProfile = function (id,email,name,lastName, token) {
            profile._id = id;
            profile.name = name;
            profile.lastName = lastName;
            profile.email = email;
            profile.token = token;
            localStorageService.set(USERKEY,profile);
        };

        var initialize = function () {
            var user = {
                _id:'',
                name: '',
                lastName:'',
                email:'',
                token: ''
            };

            var localUser = localStorageService.get(USERKEY);
            if (localUser) {
                user.name = localUser.name;
                user.lastName = localUser.lastName;
                user.email = localUser.email;
                user.token = localUser.token;
            }
            return user;
        };

        
        var login = function (email, password) {

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }

            var data = formEncode.encode({
                email: email,
                password: password,
                grant_type: "password"
            });

            return $http.post("/oauth/token", data, config);
        };



        var logout = function(){
            localStorageService.remove(USERKEY)
                return true;
        }

        var loggedIn = function(){
            var localUser = localStorageService.get(USERKEY);
            if (localUser) {
                if(localUser.token){
                    return true;
                }
            }
            return false;
        }

        var getLoggedUser = function(){
            var localUser = localStorageService.get(USERKEY);
                if (localUser) {
                    return localUser;
                }
                return null;

        }

        return {
            login:login,
            logout:logout,
            loggedIn:loggedIn,
            getLoggedUser:getLoggedUser,
            setProfile:setProfile
        };




}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;