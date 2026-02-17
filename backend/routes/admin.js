const express = require("express");
const {getAllContact} = require("../controllers/adminController");

const router = express.Router();

router.get("/", getAllContact);

module.exports = router;