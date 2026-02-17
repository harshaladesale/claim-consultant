const Query = require("../models/Query");

exports.getAllQuery = async (req,res) => {
    try {
        const query = await Query.find({})
        .sort({ createdAt: -1});

        res.status(200).json(query);
    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
};