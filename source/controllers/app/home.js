var homeController=function(server){
	server.route('/').
		get(function(req,res){
			if (req.user) {
				if (req.user.provider == 'facebook') {	
					var name     = req.user._json.first_name;
					var url_foto = "http://graph.facebook.com/"+req.user.id+"/picture?type=large";
					res.render('home/index', {
									name     : name,//<-------------------------------------mandamos los parametros
									url_foto : url_foto
								});
				}
				if (req.user.provider == 'twitter') {
					var name            = req.user.displayName;
					var url_foto        = req.user.photos[0].value.toString();
					url_foto            = url_foto.replace("_normal.jpeg",".jpeg");
					var url_fotoPortada = req.user._json.profile_banner_url;
					res.render('home/index', {
									name     : name,//<-------------------------------------mandamos los parametros
									url_foto : url_foto
								});
				}
			}else{
				res.render('home/index');
			}
		});

	server.route('/logout').
		get(function(req,res){
			req.logout();
			res.redirect('/');
		});
}

module.exports = homeController;