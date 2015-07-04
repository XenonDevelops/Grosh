var passport      = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
	/*user          = require('../models/usuario'),
	Tipo_usuario  = require('../models/tipo_usuario');
	Aspirante     = require('../models/aspirante');*/

var localConection=function(server){	


	server.post('/login',
	  passport.authenticate('local', {//le decimos que es una valiadacion local
	    successRedirect: '/',
	    failureRedirect: '/#login'
	  }));

	passport.use(new LocalStrategy(//se ejecuta cuando validamos en local
	  function(username, password, done) {
			    
	    process.nextTick(function () {
/*
		  user.findOne({'username':username}, function(err, user) {
				if (user) {
					if (user.password == password) {
						Tipo_usuario.findById(user.tipo_usuario,function(err,tipo_usuariobd){
							if (tipo_usuariobd.descripcion=='Aspirante') {

								Aspirante.findOne({usuario:user._id},function(err,aspirantebd){
									if (aspirantebd.numeroPregunta<8) {
										user.provider = 'local';
										return done(null, user);
									}else{
										return done(null, false);
									}
								});

							}else if (tipo_usuariobd.descripcion=='Administrador') {
								return done(null, user);
							}
						});
					}else{
						return done(null, false);
					}
				}else{
					return done(null, false);
				}
			});
		  */
	    });

	  }));
};

module.exports=localConection;