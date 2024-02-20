import express from 'express';
import cors from 'cors';
import nocache from 'nocache';
import { createRoutes } from './routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(nocache());

createRoutes(app);

export { app, port };