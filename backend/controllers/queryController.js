const Query = require("../models/Query");

exports.createQuery = async (req, res) => {
  try {
    const { name, email, phone, claimType, message } = req.body;

    if (!name || !email || !claimType) {
      return res.status(400).json({ msg: "Required fields missing" });
    }
    const newQuery = new Query({
      name,
      email,
      phone,
      claimType,
      message
    });

    await newQuery.save();

    res.status(201).json({ msg: "Query submitted successfully" });

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
