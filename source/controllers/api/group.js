module.exports = function(server) {
    
    var Group = require('../../models/group');
    var currentdate = new Date(); 
    var datetime = (currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
    );

    //GET ALL
    findAllGroups = function(req, res) {
        Group.find(function(err, group) {
            if(!err) 
                res.send(group);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //GET BY ID
    findByID = function(req, res) {
        Group.findById(req.params.id, function(err, group) {
            if(!err) 
                res.send(group);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //POST
    addGroup = function(req, res) {
        var newGroup = new Group({
            name            :req.body.name,
            description     :req.body.description,
            date_creation   :currentdate,
            url_image       :req.body.url_image,
            privileges      :req.body.privileges
        });

        newGroup.save(function(err) {
            if(!err) 
                console.log('Group Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newGroup);
    };

    //PUT
    updateGroup = function(req, res) {
        Group.findById(req.params.id, function(err, group) {
            name            = req.body.name;
            description     = req.body.description;
            status          = req.body.status;
            date_creation   = req.body.date_creation;
            url_image       = req.body.url_image;
            privileges      = req.body.privileges;
            
            group.save(function(err) {
                if(!err) 
                    console.log('Group Successfully Updated');
                else 
                    console.log('ERROR: ' +err); 
                res.send(group);
            });
        });
    };

    //DELETE
    deleteGroup = function(req, res) {
        Group.findById(req.params.id, function(err, group) {
            group.remove(function(err) {
                if(!err) 
                    console.log('Group Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    //API Routes
    server.get('/group', findAllGroups);
    server.get('/group/:id', findByID);
    server.post('/group', addGroup);
    server.put('/group/:id', updateGroup);
    server.delete('/group/:id', deleteGroup);
}