const mongoose = require('mongoose');
const { Schema } = mongoose;


const SessionSchema = new Schema({
    ipAddress: String,
    userAgent: String,
    wpToken: String,
    user: Object,
    creationDate: Date,
    lastRequestDate: Date,
});


module.exports = mongoose.model('session', SessionSchema);