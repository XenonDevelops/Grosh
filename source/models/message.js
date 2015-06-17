var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var messageSchema=new Schema({
	content   :{type:String,required:true},
	chat_id   :{type: Schema.Types.ObjectId, ref: 'chat'},
	date_hour :{type:Date,required:true}
});

var Message = mongoose.model('message',messageSchema);

module.exports = Message;
