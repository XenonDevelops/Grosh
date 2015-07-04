var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var chatSchema=new Schema({
    sender_user   :{type:String,required:true},
    receptor_user :{type:String,required:true}
});

var Chat = mongoose.model('chat',chatSchema);

module.exports = Chat;