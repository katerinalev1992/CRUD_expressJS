const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    id: {type: String, required: true, max:100},
    title: {type: String, required:true, max: 100},
    callory: {type: Number, required:true},
    b: {type: Number, required:true},
    z: {type: Number, required:true},
    u: {type: Number, required:true}
});

module.exports = mongoose.model('Product', ProductSchema);