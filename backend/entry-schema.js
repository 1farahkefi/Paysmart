const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    firstname: {type: String,required: true},
    lastname: {type: String,required: true},
    email: {type: String,required: true},
    phoneNumber:{type: String,required: true},
    password:{type: String,required: true}
});

module.exports = mongoose.model('signup', entrySchema);


