/**
 * Title:Token Verification Middleware
 * Description: This is a middlwares checks if generated token during login is valid or not.
 * Author: Masud Parvez
 * Date: 2023-12-04
 */
const jwt = require("jsonwebtoken");

const checkLogin = async (req, res, next) => {
  const { authorization } = req.headers;

  // Verify the presence of the authorization header
  if (!authorization) {
    return res.status(401).json({ msg: "Authorization header missing" });
  }

  try {
    const token = authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET, {
      ignoreExpiration: false,
    });

    if (decodedToken) {
      const { UserId, UserName } = decodedToken;
      req.UserId = UserId;
      req.UserName = UserName;
      next();
    } else {
      res.status(401).json({
        msg: "JWT Verification Error",
      });
    }
  } catch (error) {
    res.status(401).json({ msg: "Authorization failure" });
    console.log(`JWT Verification Error: ${error.message}`);
  }
};

//exports module
module.exports = checkLogin;
