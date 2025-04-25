import UserModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import createError from 'http-errors';

// Generate JWT Token
const generateToken = async (user, res) => {
  const { JWT_SECRET, JWT_EXP } = process.env;
  const token = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXP,
  });
  res.cookie("jwtToken", token, { maxAge: 10 * 60 * 1000, httpOnly: true }); // Modify when deploying
};

// ✅ Register User
export const registerUser = async (req, res, next) => {
  try {
    const { email, password, isAdmin = false } = req.body;

    // Check if user exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return next(createError(400, "User already exists with this email."));
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT || "12");
    const hashedPassword = await bcrypt.hash(password, saltRounds);
console.log('🔒 Hashed Password Before Saving:', hashedPassword);


    const user = await UserModel.create({
      email,
      password: hashedPassword,
      isAdmin,
    });

  

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Login User
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw createError(400, "Please provide email and password");
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      console.log('❌ User not found.');
      throw createError(401, "Incorrect email or password");
    }

    console.log('✅ User found in database:', user.email);
    console.log('📝 Stored Hashed Password:', user.password);

    // Compare the plaintext password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('🔑 Password Match Result:', isMatch);

    if (!isMatch) {
      console.log('❌ Passwords do not match.');
      throw createError(401, "Incorrect email or password");
    }

    console.log('✅ Passwords match. Generating token...');

    await generateToken(user, res);

    res.status(201).json({
      success: true,
      message: "User logged successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Logout User
export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("jwtToken", { httpOnly: true });
    res.status(200).json({
      success: true,
      message: "User was successfully logged out",
    });
  } catch (error) {
    next(error);
  }
};
