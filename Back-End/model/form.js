const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true    
    },
    city: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    complaint: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const crimeSchema = new Schema({
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    identity: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const missingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    lastseen: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Complaint = mongoose.model('complaint', complaintSchema);
const Crime = mongoose.model('crime', crimeSchema);
const Missing = mongoose.model('missing', missingSchema);

module.exports = {Complaint, Crime, Missing};