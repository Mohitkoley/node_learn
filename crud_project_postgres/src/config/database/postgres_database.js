import { Pool } from 'pg';
import { config } from 'dotenv';
config();


const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD
    } = process.env

// Create a new Pool instance with connection details
const pool = new Pool({
    user:  POSTGRES_USER,
    host: POSTGRES_HOST,
    database:  POSTGRES_DB,
    password: POSTGRES_PASSWORD,
    port: 5432,
});

// Test the database connection
async function connectDb() {
    try {
      const client = await pool.connect();
      console.log('Successfully connected to PostgreSQL database');    
      client.release();
    } catch (err) {
      console.error('Error connecting to the database:', err.stack);
    }
  }

export {
    connectDb, 
    pool
};

