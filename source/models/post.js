var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var postSchema = new Schema({
	content       :{type:String,required:true},
	user_creator  :{type:String,required:true},
	status        :{type:Boolean,required:true},
	date_creation :{type:Date,required:true},
	answers       :{type:Array}
});

var Post = mongoose.model('post', postSchema);

module.exports = Post;