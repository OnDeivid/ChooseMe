const CompetitorModel = require("../models/competitor");

exports.getAll = async (sectionName) => await CompetitorModel.find({ section: sectionName });


