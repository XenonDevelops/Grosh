/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$http'];
/*
The controller's functionality
*/
var factory = function($http){

	function add(idUser,group){
			var data = {
				id:group.idUser,
				name:group.name,
				description:group.description
			}
		    return $http.post('/group/',data);
		    
	}
	function get(id){
		return $http.get('/group/'+id);
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

	function getGroupsCreated(id){
		return $http.get('/groupUser/'+id);
	}

	function getGroupsJoined(id){
		return $http.get('/groupUserBelongs/'+id);
	}

	function addImgUrl(id,url_image){
		var data = {
			url_image:url_image
		}
		return $http.patch('/group/'+id,data);
	}
	
	return {
		add:add,
		get:get,
		getGroupsCreated:getGroupsCreated,
		getGroupsJoined:getGroupsJoined,
		update:update,
		addImgUrl:addImgUrl
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;