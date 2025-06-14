import {controllerUserLogin, controllerUserRegister} from "../user/controllers/userController.js";

import express from "express";
const router = express.Router();

router.post("/login", controllerUserLogin);
router.post("/register", controllerUserRegister);

export default router;