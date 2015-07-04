var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var fileSchema = new Schema({
    content      :{type:String},
    name         :{type:String},
    user_creator :{type:String,required:true},
    status       :{type:Boolean,required:true,default:true},
    create_date  :{type:Date,required:true},
    answer       :{type:Array}
});

var File = mongoose.model('file', fileSchema);

module.exports = File;