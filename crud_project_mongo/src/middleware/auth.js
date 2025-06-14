import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
config({
    path: `./env/.${process.env.NODE_ENV}.env`
  });



const Auth = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
      return res.status(401).send({ error: "Authorization header is missing" });
    }

    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      return res.status(401).send({ error: "Token not provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    req.token = token;

    next();
  } catch (error) {
    console.error("🔒 Auth Error:", error.message);
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

 export default Auth;