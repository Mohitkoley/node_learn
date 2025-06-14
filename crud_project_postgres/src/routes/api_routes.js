import dotenv from 'dotenv';
import express from 'express';

import noteRoutes from '../modules/notes/notes_routes.js';
import userRoutes from '../modules/user/userRoutes.js';
dotenv.config();
const COMMON_URL = process.env.COMMON_URL;
const router = express.Router();

router.use(COMMON_URL, noteRoutes);

export default router;