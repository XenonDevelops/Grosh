var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var userSchema=new Schema({
	idSocial_network :{type : String},
	username         :{type : String, required : true, index:{unique:true}},
	password		 :{type:String,required:true},
	name			 :{type:String,required:true},
	lastName		 :{type:String,required:true},
	age	      		 :{type:Number,required:true},
	sex		    	 :{type:String,
		  			   enum:['Femenino', 'Masculino'],required:true},
	email			 :{type:String,required:true},
	phone   		 :{type:String,required:true},
    status			 :{type:String,required:true},
    city			 :{type:String,required:true},
    date_registry	 :{type:Date,required:true},
    status			 :{type:Boolean,required:true},
    url_image		 :{type:String,required:true},
    groups           :{type:Array},
    groups_created	 :{type:Array},
    cont_groups		 :{type:Number,required:true}
});

var User = mongoose.model('user',userSchema);


module.exports = User;