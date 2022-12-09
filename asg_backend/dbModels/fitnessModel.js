const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitnessSchema = new Schema ({
    username: { type: String, required: true },
    description: { type: String, required: true },
    description: { type: Number, required: true },
    description: { type: Date, required: true },
}, {
    timestamps: true,
});

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness;