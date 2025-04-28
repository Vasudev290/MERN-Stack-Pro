const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
  
    res.status(statusCode).json({
      success: true,
      user,
      token,
    });
  };
  
  export default sendToken;
  