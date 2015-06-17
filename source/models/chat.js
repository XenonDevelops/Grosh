var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var chatSchema=new Schema({
	user_sender   :{type:String,required:true},
	user_receptor :{type:String,required:true}
});

var Chat = mongoose.model('chat',chatSchema);

module.exports = Chat;