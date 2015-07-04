var nodemailer = require('nodemailer');
	
	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'correo desde donde vas a enviar los emails',
	        pass: 'password del correo'
	    }
	});

	/* NB! No need to recreate the transporter object. You can use 
	the same transporter object for all e-mails */

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Fred Foo ✔ <xenon.develops@gmail.com>', // sender address
	    to: 'ark_angelito@hotmail.com, yo0_94@hotmail.com', // list of receivers
	    subject: 'Grosh', // Subject line
	    text: 'Algun Texto', // plaintext body
	    html: '<b>Hello world ✔</b>' // html body
	};
var sendMaill=function(server){
	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
}

module.exports=sendMaill;
