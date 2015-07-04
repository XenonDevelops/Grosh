var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var userSchema=new Schema({
    id_social_network :{type :String},
    email             :{
                            type :String,
                            required: true,
                            index:{
                                unique:true
                            }
                        },
    password          :{type:String,required:true},
    name              :{type:String},
    last_name         :{type:String},
    age               :{type:Number},
    sex               :{
                            type:String,
                            enum:[
                                'Femenino',
                                'Masculino'
                            ]
                        },
    phone             :{type:String},
    state             :{type:String},
    city              :{type:String},
    date_registry     :{type:Date,required:true},
    status            :{type:Boolean,required:true,default:true},
    url_image         :{type:String},
    groups            :{type:Array},
    groups_created    :{type:Array}
});

var User = mongoose.model('user',userSchema);


module.exports = User;