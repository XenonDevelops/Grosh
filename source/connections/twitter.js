var passport        = require('passport'),
	TwitterStrategy = require('passport-twitter').Strategy;

	passport.use(new TwitterStrategy({
		consumerKey    : 'Klps9EB1t0xNoerQosNsvqEQl',
		consumerSecret : '4jhZ5mZ8eHW4isR3Yo9wcjfWlv6ntBHACS5RRo8FsXaj6EuGht',
		callbackURL    : 'http://localhost:8000/auth/twitter/callback'
	},function(accessToken,RefreshToken,profile,done){
		done(null,profile);
	}));

	

var twitterConection=function(server){
	server.get('/auth/twitter',passport.authenticate('twitter'));// Esta ruta es para loguearte con twitter

	server.get('/auth/twitter/callback',passport.authenticate('twitter',{
														successRedirect:'/',
														failureRedirect:'/'}));
}

module.exports=twitterConection;