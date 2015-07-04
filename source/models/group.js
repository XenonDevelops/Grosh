var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var groupSchema=new Schema({
    
    name           :{type:String,required:true},
    description    :{type:String},
    date_creation  :{type:Date,required:true},
    status         :{type:Boolean,required:true,default:true},
    url_image      :{type:String},
    privileges     :{
                        type:String,
                        enum:[
                            'personal',
                            'public',
                            'private'
                        ]
                    },
    members        :{type:Array},            
    administrators :{type:Array},
    post           :{type:Array},
    image          :{type:Array},
    file           :{type:Array}
});

var Group = mongoose.model('group',groupSchema);

module.exports = Group;