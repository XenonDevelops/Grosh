var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var messageSchema=new Schema({
    chat_id     :{type: Schema.Types.ObjectId, ref: 'chat'},
    content     :{type:String,required:true},
    create_date :{type:Date,required:true}
});

var Message = mongoose.model('message',messageSchema);

module.exports = Message;
