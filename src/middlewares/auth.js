const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  try {
    const token_bearer = req.headers.authorization;
    if (token_bearer) {
      const token = token_bearer.split(" ")[1];
      const jwt_secret = process.env.JWT_SECRET;
      const isTokenValid = jwt.verify(token, jwt_secret);
      if (isTokenValid) {
        req.user = jwt.decode(token);
        next();
      }
    } else {
      throw new Error("you need a token !");
    }
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: error.message,
      data: [],
    });
  }
};

module.exports = authorization;
