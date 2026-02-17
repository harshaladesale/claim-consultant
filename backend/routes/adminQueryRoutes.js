const express = require("express");
const { getAllQuery } = require("../controllers/adminQueryController");

const router = express.Router();

router.get("/", getAllQuery);

module.exports = router;
