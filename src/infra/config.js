import dotenv from 'dotenv';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const DOTENV_FILENAME = `.env.${process.env.NODE_ENV}`;
const DOTENV_PATH = path.resolve(__dirname, `./${DOTENV_FILENAME}`);
dotenv.config({ path: DOTENV_PATH });

export default {
  app: {
    port: Number(process.env.DB_PORT) || 3000,
    nodeEnv: process.env.NODE_ENV,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  }
};