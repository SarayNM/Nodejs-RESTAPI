const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name:{type:String, required:true},
    mbid:{type:String, required:true},
    url:{type:String, required:true},
    image_small:{type:String, required:true},
    image:{type:String, required:true},
});

module.exports = mongoose.model('artists', artistSchema);