/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$http'];
/*
The controller's functionality
*/
var factory = function($http){

	function add(content,idUser,idGroup){
			var data = {
				name:user.name,
			}
		    return $http.post('/post/',data);
		    
	}
	function get(id){
		return $http.get('/user/'+id);
	}
	function getByEmail(email){
		return $http.get('/user/'+email);
	}
    function update(user){
    	return $http.put('/user/'+user._id,{
    		name:user.name,
    		last_name:user.last_name,
    		password:user.password,
    		status:user.status,
    		email:user.email,
    		sex:user.sex
    	});
	}


	return {
		add:add,
		get:get,
		getByEmail:getByEmail,
		update:update
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;