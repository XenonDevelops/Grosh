var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var imagesSchema = new Schema({
	header       :{type:String},
	name         :{type:String},
	user_creator :{type:String,required:true},
	status       :{type:Boolean,required:true},
	date_hour    :{type:Date,required:true}
});

var Images = mongoose.model('images', imagesSchema);

module.exports = Images;

