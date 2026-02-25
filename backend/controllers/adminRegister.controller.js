const Admin = require("../models/AdminRegister.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Super";


// ✅ Register
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      name,
      email,
      password: hashedPassword
    });

    await admin.save();

    res.status(201).json({
      success: true,
      message: "Admin Registered Successfully"
    });

  } catch (error) {
res.status(500).json({ message: error.message });  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid Email" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ CREATE COOKIE
    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: false, // true in production
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message: "Login Successful"
    });

  } catch (error) {
res.status(500).json({ message: error.message });  }
};