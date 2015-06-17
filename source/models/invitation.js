var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var invitationSchema = new Schema({
	idGroup     :{type:String,required:true},
	userSender  :{type:String,required:true},
	userInvited :{type:String,required:true},
	dateHour    :{type:Date,required:true},
	status      :{type:String,
				  enum:['En espera', 'Aceptada', 'Declinada'],
						required:true,
						default: 'En espera'}
});

var Invitation = mongoose.model('invitation',invitationSchema);

module.exports = Invitation;