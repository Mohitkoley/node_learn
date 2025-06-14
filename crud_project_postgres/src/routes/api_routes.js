import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import noteRoutes from '../modules/notes/notes_routes.js';
import userRoutes from '../modules/user/userRoutes.js';
import logger  from '../../../crud_project_mongo/src/middleware/logger.js';
dotenv.config();
const COMMON_URL = process.env.COMMON_URL;
const router = express.Router();

router.use(COMMON_URL, noteRoutes);
router.use(COMMON_URL, userRoutes);


export default router;