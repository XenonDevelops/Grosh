var express      = require('express'),
	swig         = require('swig'),
	http         = require('http'),
	passport     = require('passport'),
	session      = require('express-session'),
	cookieParser = require('cookie-parser');
	bodyParser   = require('body-parser');
var server       = express();//<-------------------------------creamos el server de express
var server_socket = http.createServer(server).listen(8000);//<-creamos el server de sockets
var io = require('socket.io').listen(server_socket);//<--------el servidor de eventos escuchara en el mismo puerto que nuestro server de express

swig.setDefaults({
	cache:false,
	varControls: ['<%=', '%>'] //<-----------------------------tags que se usarán en el html para usar swig
});

//configuracion de express
server.use(bodyParser.urlencoded({ extended : true }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(session({ secret            : 'GrOsh2015_@ñ', 
					 key               : 'sid',
	                 saveUninitialized : true,
	                 resave            : true}));

//configuracion de  passport
server.use( passport.initialize() );
server.use( passport.session() );

passport.serializeUser(function(user,done){
	done(null,user);
});

passport.deserializeUser(function(user,done){
	done(null,user);
});

//config swig
server.engine('html',swig.renderFile);//<----------------------el motor de templates es swig
server.set('view engine','html');
server.set('views',__dirname + '/source/views');//<------------en donde van a estar las vistas o templates
server.set('uploadDir', './public/uploads');//<----------------carpeta en la que se guardaran las cosas que subamos
server.use(express.static('./public'));//<---------------------aqui colocamos los ccs,js,img y toda la informacion publica.

//controllers
require('./source/controllers/app/home')(server);
require('./source/controllers/api/chat')(io);

//connections
require('./source/connections/facebook')(server);
require('./source/connections/local')(server,io);
require('./source/connections/twitter')(server);
require('./source/models/user');
require('./source/models/group');
require('./source/models/post');
require('./source/models/image');
require('./source/models/answer');
require('./source/models/file');
require('./source/models/chat');
require('./source/models/message');
require('./source/models/invitation');
require('./source/models/request');
//require('./source/connections/view-twitter')(server);
//require('./source/connections/createTwit')('Hello twitter from #nodejs');
//require('./app/connections/mail')(server);