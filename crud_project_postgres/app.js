import { config } from 'dotenv';
import express from 'express';
import router from './src/routes/api_routes.js';
import {connectDb, pool} from "./src/config/database/postgres_database.js";


var app = express();

app.use(express.json());

app.use(router);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    connectDb();
    console.log('Server is running on port '+ port);
});



