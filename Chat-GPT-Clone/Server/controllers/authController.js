import userModel from "../models/UserModel.js";
import errorResponse from "../utils/errorResponse.js";

//JWT Tokens
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.status(statusCode).json({
    success: true,
    token,
  });
};

//Register
const registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    //Existing User
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next(new errorResponse("Email is already register", 500));
    }
    const user = await userModel.create({ username, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Login
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || password) {
      return next(new errorResponse("Please provide email or password"));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new errorResponse("Invalid Creditial", 401));
    }
    const isMatch = await userModel.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid Creditial", 401));
    }
    //res
    sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Logout
const logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Logout Successful",
  });
};

export { registerController, loginController, logoutController, sendToken };
