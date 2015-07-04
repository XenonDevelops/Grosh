module.exports = function(server) {
	
	var User = require('../../models/user');
    var currentdate = new Date(); 
    var datetime = (currentdate.getDate() + "/"
        +(currentdate.getMonth() + 1) + "/" 
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
    );

    //GET ALL
    findAllUsers = function(req, res) {
    	User.find(function(err, user) {
    		if(!err) 
                res.send(user);
    		else 
                console.log('ERROR: ' +err);
    	});
    };

    //GET BY ID
    findByID = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if(!err) 
                res.send(user);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //POST
    addUser = function(req, res) {
        var newUser = new User({
            id_social_network :req.body.id_social_network,
            email             :req.body.email,
            password          :req.body.password,
            name              :req.body.name,
            last_name         :req.body.last_name,
            age               :req.body.age,
            sex               :req.body.sex,
            phone             :req.body.phone,
            state             :req.body.state,
            city              :req.body.city,
            date_registry     :currentdate,
            status            :req.body.status,
            url_image         :req.body.url_image        
        });

        newUser.save(function(err) {
            if(!err) 
                console.log('User Successfully Saved');
            else 
                console.log('ERROR: ' +err);
        });

        res.send(newUser);
    };

    //PUT
    updateUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            user.id_social_network =req.body.id_social_network;
            user.email             =req.body.email;
            user.password          =req.body.password;
            user.name              =req.body.name;
            user.last_name         =req.body.last_name;
            user.age               =req.body.age;
            user.sex               =req.body.sex;
            user.phone             =req.body.phone;
            user.state             =req.body.state;
            user.city              =req.body.city;
            user.status            =req.body.status;
            user.url_image         =req.body.url_image;
        
            user.save(function(err) {
                if(!err) 
                    console.log('User Successfully Updated');
                else 
                    console.log('ERROR: ' +err);  
            });   
            res.send(user);     
        });
    };

    //DELETE
    deleteUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            user.remove(function(err) {
                if(!err) 
                    console.log('User Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });  
        });
    }

    //API Routes
    server.get('/user', findAllUsers);
    server.get('/user/:id', findByID);
    server.post('/user', addUser);
    server.put('/user/:id', updateUser);
    server.delete('/user/:id', deleteUser);
}