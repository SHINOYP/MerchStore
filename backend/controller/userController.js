const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const validator = require("validator");
const { hashPassword, comparePassword } = require("../helpers/authHelpers");

// User SignUP
const signUpUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validations
    const exisitingUser = await userModel.findOne({ email });

    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ error: "All fields must be filled" });
    } else if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Email not valid" });
    } else if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ error: "password not strong enough" });
    } else if (exisitingUser) {
      //check user
      return res.status(409).json({
        success: true,
        message: "Already Registered please login",
      });
    } else {
      //hash
      const hashedPassword = await hashPassword(password);
      //save
      const user = await new userModel({
        name,
        email,
        phone,
        address,
        password: hashedPassword,
      }).save();
      res.status(201).json({
        success: true,
        message: "User Register Successfully",
        user: user,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//User Login
const logInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //validations
    const user = await userModel.findOne({ email });
    if (!email || !password) {
      return res.status(400).json({ error: "All fields must be filled" });
    }
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user?.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }
    //token
    const token = await jwt.sign({ _id: user?._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        token: token,
        role: user.roll,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signUpUser,
  logInUser,
};
