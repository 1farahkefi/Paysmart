const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 content :{
    type: String,
    required:true
    }
/*date:{
    type:Date,
    required:true
    }*/
});



module.exports = mongoose.model('help', userSchema);
