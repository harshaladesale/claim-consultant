const express = require("express");
const { createQuery } = require("../controllers/queryController");

const router = express.Router();

router.post("/", createQuery);

module.exports = router;
