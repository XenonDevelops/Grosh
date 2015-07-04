var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var invitationSchema = new Schema({
    id_group     :{type:String,required:true},
    sender_user  :{type:String,required:true},
    invited_user :{type:String,required:true},
    create_date  :{type:Date,required:true},
    status       :{
                    type:String,
                    enum:[
                        'En espera',
                        'Aceptada',
                        'Declinada'
                    ],
                    required:true,
                    default: 'En espera'
                }
});

var Invitation = mongoose.model('invitation',invitationSchema);

module.exports = Invitation;