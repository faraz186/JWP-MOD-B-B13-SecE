import jwt from "jsonwebtoken";

const userVerifyMiddle = (req, res, next) => {
  try {
    var token = req.headers.authorization.split(" ")[1];

    console.log(token);

    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded) {
      next();
    } else {
      res.json({
        message: "token is invalid",
      });
    }
  } catch (error) {
    res.json({
      message: "token is invalid",
    });
  }
};

export default userVerifyMiddle;
