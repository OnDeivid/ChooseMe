const mongoose = require('mongoose');

const competitorSchema = new mongoose.Schema({
    section: { type: String },
    model: { type: String },
    name: { type: String },
    votes: { type: Number },
    link: { type: String },
})


const CompetitorSchema = mongoose.model('competitor', competitorSchema)


module.exports = CompetitorSchema;