import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        logging: false,
        dialectOptions: {
            ssl: {
              require: true,             // Needed for Neon
              rejectUnauthorized: false, // Accept self-signed certs (Neon compatible)
            },
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// Test the connection
const sequelizeConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Sequelize connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};



export {sequelize,sequelizeConnect as connectToDatabase} ;
