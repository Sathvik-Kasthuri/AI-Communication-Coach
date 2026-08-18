const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    //Check If user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({
        message: "User Already Exists",
      });
    }

    //Hashed Password

    const hashedPassword = await bcrypt.hash(password, 10);

    //create the user

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    //send the response

    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { signup };
