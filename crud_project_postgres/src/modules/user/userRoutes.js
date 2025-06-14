import express from 'express';
import UserController from "./controller/user_controller.js";

const router = express.Router();

router.post('/login', UserController.userLogin );
router.post('/register', UserController.userRegister);

export default router;