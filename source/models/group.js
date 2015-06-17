var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var groupSchema=new Schema({
	
	name			:{type:String,required:true},
	description		:{type:String,required:true},
	date_creation	:{type:Date,required:true},
	status			:{type:Boolean,required:true},
	url_image		:{type:String,required:true},
	privileges		:{type:String},
	members 		:{type:Array},            
	administrators :{type:Array},
	post			:{type:Array},
	url_image      :{type:Array},
	file			:{type:Array}
});

var Group = mongoose.model('group',groupSchema);

module.exports = Group;