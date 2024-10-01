const CompetitorModel = require("../models/competitor");

exports.getSectionData = async (sectionName) => await CompetitorModel.find({ section: sectionName });


exports.increaseCount = async (sectionName, name) => {
    const competitorData = await CompetitorModel.find({ section: sectionName, name: name })
    competitorData[0].votes += 1
    console.log(competitorData[0])
    await CompetitorModel.findOneAndUpdate(
        { section: sectionName, name: name },
        competitorData[0]
    );

}


