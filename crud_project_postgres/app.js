import { config } from 'dotenv';
import express from 'express';
import router from './src/routes/api_routes.js';
import {connectDb, pool} from "./src/config/database/postgres_database.js";
import logger  from '../crud_project_mongo/src/middleware/logger.js';
import cors from 'cors';

var app = express();

app.use(express.json());

app.use(router);
app.use(cors());

const port = process.env.PORT || 3000;
//logger
app.use(logger);
app.listen(port, () => {
    connectDb();
    console.log('Server is running on port '+ port);
});




