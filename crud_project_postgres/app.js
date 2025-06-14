import { config } from 'dotenv';
import express from 'express';
import router from './src/routes/api_routes.js';
import {connectDb, pool} from "./src/config/database/postgres_database.js";
import logger  from '../crud_project_mongo/src/middleware/logger.js';
import cors from 'cors';
import {connectToDatabase} from './src/config/database/database.js';

var app = express();

app.use(express.json());

app.use(router);
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
//logger
// app.use(logger);
app.listen(port, async () => {
    connectDb();
    await connectToDatabase();
    console.log('Server is running on port '+ port);
});




