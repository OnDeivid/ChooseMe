const CompetitorModel = require("../models/competitor");

exports.getSectionData = async (sectionName) => await CompetitorModel.find({ section: sectionName });

exports.getAllSectionData = async () => await CompetitorModel.find();

exports.increaseCount = async (sectionName, name) => {
    try {
        const competitorData = await CompetitorModel.findOne({ section: sectionName, name: name });

        if (competitorData) {
            await CompetitorModel.findOneAndUpdate(
                { section: sectionName, name: name },
                { $inc: { votes: 1 } },
                { new: true }
            );
        } else {
            console.error(`Competitor not found in section: ${sectionName} with name: ${name}`);
            throw new Error("Competitor not found");
        }
    } catch (error) {
        console.error("Error in increaseCount:", error.message);
        throw error;
    }
};

exports.getUpdatedVotes = async () => {
    const votes = await CompetitorModel.find({}, 'votes name');
    return votes
}

