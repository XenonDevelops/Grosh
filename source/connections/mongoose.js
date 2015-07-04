var mongoose=require('mongoose');
mongoose.connect('mongodb://groshUser:grosh_//@ds031611.mongolab.com:31611/grosh');
module.exports=mongoose;