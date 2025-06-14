import { config } from 'dotenv';
import express from 'express';

import noteRoutes from '../modules/notes/noteRoutes.js';
import userRoutes from '../modules/user/userRoutes.js';
config({
    path: `./env/.${process.env.NODE_ENV}.env`
  });

const COMMON_URL = process.env.COMMON_URL;
const router = express.Router();
router.use(COMMON_URL, noteRoutes);
router.use(COMMON_URL, userRoutes);
export default router;