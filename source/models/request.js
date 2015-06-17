var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var requestSchema = new Schema({
	idGroup          :{type:String,required:true},
	userRequester :{type:String,required:true},
	dateHour          :{type:Date,required:true},
	status             :{type:String,
		                 enum:['En espera', 'Aceptada', 'Declinada'],required:true}
});

var Request = mongoose.model('request',requestSchema);

module.exports = Request;