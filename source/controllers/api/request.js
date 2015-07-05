module.exports = function(server) {
    
    var Request = require('../../models/request');
    var Group   = require('../../models/group');
    var User    = require('../../models/user');
    var currentdate = new Date(); 
    var datetime = (currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
    );

    //GET ALL
    findAllRequests = function(req, res) {
        Request.find(function(err, request) {
            if(!err) 
                res.send(request);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //GET BY ID
    findByID = function(req, res) {
        Request.findById(req.params.id, function(err, request) {
            if(!err) 
                res.send(request);
            else 
                console.log('ERROR: ' +err);
        });
    };

    //POST
    addRequest = function(req, res) {
        var newRequest = new Request({
            id_group       :req.body.id_group,
            requester_user :req.body.requester_user,
            create_date    :currentdate
        });

        newRequest.save(function(err) {
            if(!err) 
                console.log('Request Successfully Saved');
            else 
                console.log('ERROR: ' +err);
       });

        res.send(newRequest);
    };

    //PUT
    updateRequest = function(req, res) {
        Request.findById(req.body.id_request, function(err, request) {
            if(req.body.status_request == true){
              request.status = 'aceptado';

              request.save(function(err) {
                Group.findById(request.id_group, function(err, group) {
                    group.members.push(request.requester_user);

                    group.save(function(err) {

                    });
                });

                User.findById(request.requester_user, function(err, user) {
                    user.groups.push(request.id_group);

                    user.save(function(err) {

                    });
                });
              });
            }else{
              request.status = 'declinada';  

            }

            


            request.status = req.body.status;
            
            request.save(function(err) {
                if(!err) 
                    console.log("Request Successfully Updated");
                else 
                    console.log('ERROR: ' +err); 
                
            });
            res.send(request);
        });
    };

    //DELETE
    deleteRequest = function(req, res) {
        Request.findById(req.params.id, function(err, request) {
            request.remove(function(err) {
                if(!err) 
                    console.log('Request Successfully Deleted');
                else 
                    console.log('ERROR: ' +err);  
            });    
        });
    }

    //API Routes
    server.get('/request', findAllRequests);
    server.get('/request/:id', findByID);
    server.post('/request', addRequest);
    server.put('/request/:id', updateRequest);
    server.delete('/request/:id', deleteRequest);
}