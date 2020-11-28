'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: 'Phone number has to be unique'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['applied', 'apply', 'interview', 'accepted', 'rejected']
        }],
        default: ['apply']
    }
})

module.exports = mongoose.model('Jobs', JobsSchema)