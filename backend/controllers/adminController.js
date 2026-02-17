const Contact = require("../models/Contact");

exports.getAllContact = async (req,res) => {
    try {
        const contact = await Contact.find({})
        .sort({ createdAt: -1});

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
};