const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema=mongoose.Schema({

    firstname: {type: String,required: true,default:"malek"},
    lastname: {type: String,required: true,unique: true},
    email: {type: String,required: true,unique: true},
    phoneNumber:{type: String,required: true},
    password:{type: String,required: true}
    
});
userSchema.plugin(uniqueValidator);
module.exports=mongoose.model('utilisateur',userSchema);
