const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    // author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    author: { type: String, required: true },
    imageUrl: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("posts",postSchema);