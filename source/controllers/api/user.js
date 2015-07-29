module.exports = function(server) {

    var User = require('../../models/user');


    /**
     * @api {get} /user/ Return a list of users
     * @apiVersion 1.0.0
     * @apiName GetUsers
     * @apiGroup user
     *
     *
     * @apiSuccessExample Success-Response:
     *
     * [
     *     {
     *       "_id": "559784231b993bfe0e8667b7",
     *       "id_social_network": "56789abcdefgrtyui",
     *       "email": "angel@mail.com",
     *       "password": "123abcd",
     *       "name": "Angel David",
     *       "last_name": "Lagunas",
     *       "age": 21,
     *       "sex": "Masculino",
     *       "phone": "777123456",
     *       "state": "Morelos",
     *       "city": "Temixco",
     *       "date_registry": "2015-07-04T06:53:11.132Z",
     *       "url_image": "http://lorempixel.com/g/400/200/",
     *       "__v": 1,
     *       "groups_created": [
     *         {
     *           "status": true,
     *           "members": [],
     *           "administrators": [],
     *           "post": [],
     *           "image": [],
     *           "file": [],
     *           "_id": "559784231b993bfe0e8667b8",
     *           "privileges": "personal",
     *           "date_creation": "2015-07-04T06:53:11.132Z",
     *           "description": "My personal folder",
     *           "name": "my g-cloud",
     *           "__v": 0
     *         }
     *       ],
     *       "groups": [],
     *       "status": true
     *     },
     *     {
     *       "_id": "559786baa361ca280ffa15f0",
     *       "id_social_network": "56789abcdefgrtyui",
     *       "email": "angel@mail.com.mx",
     *       "password": "123abcd",
     *       "name": "Angel David",
     *       "last_name": "Lagunas",
     *     "age": 21,
     *     "sex": "Masculino",
     *     "phone": "777123456",
     *     "state": "Morelos",
     *     "city": "Temixco",
     *     "date_registry": "2015-07-04T07:04:54.592Z",
     *     "url_image": "http://lorempixel.com/g/400/200/",
     *     "__v": 1,
     *     "groups_created": [
     *         {
     *           "status": true,
     *           "members": [],
     *           "administrators": [
     *             "559786baa361ca280ffa15f0"
     *           ],
     *           "post": [],
     *           "image": [],
     *           "file": [],
     *           "_id": "559786bba361ca280ffa15f1",
     *           "privileges": "personal",
     *           "date_creation": "2015-07-04T07:04:54.592Z",
     *           "description": "My personal folder",
     *           "name": "my g-cloud",
     *           "__v": 0
     *         }
     *       ],
     *       "groups": [],
     *       "status": true
     *     }
     *  ]
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * }
     *
     */
    findAllUsers = function(req, res) {
        User.find(function(err, user) {
            if (!err)
                res.send(user);
            else
                console.log('ERROR: ' + err);
        });
    };

    /**
     * @api {get} /user/:id Gets a specific user
     * @apiVersion 1.0.0
     * @apiName GetUser
     * @apiGroup user
     *
     * @apiParam {String} id User to look for.
     *
     * @apiSuccessExample Success-Response:
     *
     * [
     *     {
     *       "_id": "559784231b993bfe0e8667b7",
     *       "id_social_network": "56789abcdefgrtyui",
     *       "email": "angel@mail.com",
     *       "password": "123abcd",
     *       "name": "Angel David",
     *       "last_name": "Lagunas",
     *       "age": 21,
     *       "sex": "Masculino",
     *       "phone": "777123456",
     *       "state": "Morelos",
     *       "city": "Temixco",
     *       "date_registry": "2015-07-04T06:53:11.132Z",
     *       "url_image": "http://lorempixel.com/g/400/200/",
     *       "__v": 1,
     *       "groups_created": [
     *         {
     *           "status": true,
     *           "members": [],
     *           "administrators": [],
     *           "post": [],
     *           "image": [],
     *           "file": [],
     *           "_id": "559784231b993bfe0e8667b8",
     *           "privileges": "personal",
     *           "date_creation": "2015-07-04T06:53:11.132Z",
     *           "description": "My personal folder",
     *           "name": "my g-cloud",
     *           "__v": 0
     *         }
     *       ],
     *       "groups": [],
     *       "status": true
     *     },
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * }
     *
     */
    findByID = function(req, res) {
        User.findOne({
            'email': req.params.email
        }, function(err, user) {
            if (!err)
                res.send(user);
            else
                console.log('ERROR: ' + err);
        });
    };

    /**
     * @api {post} /user/ Creates a user
     * @apiVersion 1.0.0
     * @apiName CreateUsers
     * @apiGroup user
     *
     * @apiParam {String} id_social_network Id generated by the user's social network.
     * @apiParam {String} email Email address to log in, it is used as a username.
     * @apiParam {String} password Password to log into the app.
     * @apiParam {String} name Real name from the user.
     * @apiParam {String} last_name Lastname(s) from the user.
     * @apiParam {number} age Age from the user.
     * @apiParam {String} sex Sex from the user.
     * @apiParam {String} phone Telephone number from the user.
     * @apiParam {String} state State where the user lives.
     * @apiParam {String} city City where the user lives.
     * @apiParam {String} url_image Url of the profile picture from the user.
     *
     *
     * @apiSuccessExample Success-Response:
     *  {
     *      "_id": "559784231b993bfe0e8667b7",
     *      "id_social_network": "56789abcdefgrtyui",
     *      "email": "angel@mail.com",
     *      "password": "123abcd",
     *      "name": "Angel David",
     *      "last_name": "Lagunas",
     *      "age": 21,
     *      "sex": "Masculino",
     *      "phone": "777123456",
     *      "state": "Morelos",
     *      "city": "Temixco",
     *      "date_registry": "2015-07-04T06:53:11.132Z",
     *      "url_image": "http://lorempixel.com/g/400/200/",
     *      "__v": 1,
     *      "groups_created": [
     *    {
     *      "status": true,
     *      "members": [],
     *      "administrators": [],
     *      "post": [],
     *      "image": [],
     *      "file": [],
     *      "_id": "559784231b993bfe0e8667b8",
     *      "privileges": "personal",
     *      "date_creation": "2015-07-04T06:53:11.132Z",
     *       "description": "My personal folder",
     *       "name": "my g-cloud",
     *       "__v": 0
     *     }
     *   ],
     *   "groups": [],
     *   "status": true
     *  },
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "201 Created"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * }
     *
     */
    addUser = function(req, res) {
        var currentdate = new Date();
        var newUser = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            last_name: req.body.last_name,
            age: req.body.age,
            sex: req.body.sex,
            phone: req.body.phone,
            state: req.body.state,
            city: req.body.city,
            date_registry: currentdate,
            url_image: req.body.url_image
        });

        newUser.save(function(err) {
            if (err) {
                console.log('ERROR: ' + err);
                res.statusCode = 409;
                res.send('Duplicated email');
            } else {
                console.log('User Successfully Saved');
                createGCloud(newUser);
                res.send(newUser);
            }
        });

        //res.send(newUser);
    };

    /**
     * @api {put} /user/:id Updates a user
     * @apiVersion 1.0.0
     * @apiName UpdateUser
     * @apiGroup user
     *
     * @apiParam {String} id Id of User to update.
     * @apiParam {String} id_social_network Id generated by the user's social network.
     * @apiParam {String} email Email address to log in, it is used as a username.
     * @apiParam {String} password Password to log into the app.
     * @apiParam {String} name Real name from the user.
     * @apiParam {String} last_name Lastname(s) from the user.
     * @apiParam {number} age Age from the user.
     * @apiParam {String} sex Sex from the user.
     * @apiParam {String} phone Telephone number from the user.
     * @apiParam {String} state State where the user lives.
     * @apiParam {String} city City where the user lives.
     * @apiParam {Boolean} status Status of the user Boolean.
     * @apiParam {String} url_image Url of the profile picture from the user.
     *
     * @apiSuccessExample Success-Response:
     *  {
     *      "_id": "559784231b993bfe0e8667b7",
     *      "id_social_network": "56789abcdefgrtyui",
     *      "email": "angel@mail.com",
     *      "password": "123abcd",
     *      "name": "Angel David",
     *      "last_name": "Lagunas",
     *      "age": 21,
     *      "sex": "Masculino",
     *      "phone": "777123456",
     *      "state": "Morelos",
     *      "city": "Temixco",
     *      "date_registry": "2015-07-04T06:53:11.132Z",
     *      "url_image": "http://lorempixel.com/g/400/200/",
     *      "__v": 1,
     *      "groups_created": [
     *    {
     *      "status": true,
     *      "members": [],
     *      "administrators": [],
     *      "post": [],
     *      "image": [],
     *      "file": [],
     *      "_id": "559784231b993bfe0e8667b8",
     *      "privileges": "personal",
     *      "date_creation": "2015-07-04T06:53:11.132Z",
     *       "description": "My personal folder",
     *       "name": "my g-cloud",
     *       "__v": 0
     *     }
     *   ],
     *   "groups": [],
     *   "status": true
     *  },
     *
     * @apiErrorExample {json} Error-400:
     *     {
     *       "error": "UserNotFound"
     *     }
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "201 Created"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * }
     *
     */
    updateUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            //     user.id_social_network =req.body.id_social_network;
            user.email = req.body.email;
            user.password = req.body.password;
            user.name = req.body.name;
            user.last_name = req.body.last_name;
            //  user.age               =req.body.age;
            user.sex = req.body.sex;
            //   user.phone             =req.body.phone;
            //  user.state             =req.body.state;
            //  user.city              =req.body.city;
            user.status = req.body.status;
            //    user.url_image         =req.body.url_image;

            user.save(function(err) {
                if (!err)
                    console.log('User Successfully Updated');
                else
                    console.log('ERROR: ' + err);
            });
            res.send(user);
        });
    };

    addURLImage = function(req, res){
        User.findById(req.params.id, function(err, user){
            user.url_image = req.body.url_image;
            user.save(function(err){
                if (!err) {
                    res.send('Updated');
                }else{
                    console.log('error: '+ err);
                    res.send('error');
                }
            });
        });
    }

    addURLFrontImage = function(req, res){
        User.findById(req.params.id, function(err, user){
            user.url_front_image = req.body.url_front_image;
            user.save(function(err){
                if (!err) {
                    res.send('Updated');
                }else{
                    res.send('error');
                }
            });
        });
    }

    /**
     * @api {delete} /user/:id Delete a specific user
     * @apiVersion 1.0.0
     * @apiName DeleteUser
     * @apiGroup user
     *
     * @apiParam {String} id User to delete.
     *
     * @apiSuccessExample Success-Response:
     *     {
     *        "msg":"User Successfully Deleted"
     *     }
     *
     *
     * @apiHeaderExample {json} Header-Request:
     *     {
     *       "Authorization": "Bearer 2af428236a809a023e68ec543a61b9366da7b56f",
     *     }
     *
     * @apiHeaderExample {json} Header-Response:
     *     {
     *       "Content-Type": "application/json; charset=utf-8",
     *       "status": "200 OK"
     *     }
     *
     * @apiErrorExample Error-404:
     *{
     *  "message": "The resource specified don't exist.",
     * }
     *
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token was not found.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "The access token provided has expired.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Malformed auth header.",
     * }
     *
     * @apiErrorExample Error-500:
     *{
     *  "OAuth2Error": "Only one method may be used to authenticate at a time (Auth header, GET or POST).",
     * }
     *
     */
    deleteUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            user.remove(function(err) {
                if (!err)
                    console.log('User Successfully Deleted');
                else
                    console.log('ERROR: ' + err);
            });
        });
    }


    function createGCloud(user) {
        var Group = require('../../models/group');
        var admins = [user.id];
        var newGroup = new Group({
            name: "my g-cloud",
            description: "My personal folder",
            create_date: currentdate,
            privileges: "personal",
            administrators: admins
        });


        newGroup.save(function(err) {
            if (err) {
                console.log('ERROR: ' + err);
            } else {
                user.groups_created.push(newGroup);
                user.save(function(err) {
                    if (err)
                        console.log("ERROR: " + err);
                    else
                        console.log("g-cloud creado");
                });
            }
        });
    }

    //API Routes
    server.get('/user', server.oauth.authorise(), findAllUsers);
    server.get('/user/:email', server.oauth.authorise(), findByID);
    server.post('/user', addUser);
    server.put('/user/:id', server.oauth.authorise(), updateUser);
    server.patch('/userImage/:id/', server.oauth.authorise(), addURLImage);
    server.patch('/userFrontImage/:id/', server.oauth.authorise(), addURLFrontImage);
    server.delete('/user/:id', server.oauth.authorise(), deleteUser);
}