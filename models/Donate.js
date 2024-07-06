const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonateSchema = new mongoose.Schema({
    fromuser: {
        type: String,
    },
    touser: {
        type: String,
    },
    blogid: {
        type: String,
    },
    read: {
        type: Boolean,
        default: false
    },
    amount: {
        type: Number,
    }
});
module.exports = mongoose.model('Donate', DonateSchema);