import express from 'express';
import  noteRoutes from '../modules/notes/index.js';

import { config } from 'dotenv';
config({
    path: `./env/.${process.env.NODE_ENV}.env`
  });

const COMMON_URL = process.env.COMMON_URL;
const router = express.Router();
router.use(COMMON_URL, noteRoutes);

export default router;