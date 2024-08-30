const mongoose = require('mongoose');

const piadaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    jokeMessage: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Piada', piadaSchema);
