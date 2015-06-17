var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var fileSchema = new Schema({
	header       :{type:String},
	name         :{type:String},
	user_creator :{type:String,required:true},
	status       :{type:Boolean,required:true},
	date_hour    :{type:Date,required:true}
});

var File = mongoose.model('file', fileSchema);

module.exports = File;