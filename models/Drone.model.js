// Iteration #1

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dronesSchema = new Schema (
    {
    name: {
        type: String,
        required: true,
    },
    propellers: {
        type: Number,
        required: true,
    },
    maxSpeed: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
}
);

const Drone = mongoose.model('Drone', dronesSchema)

module.exports = Drone