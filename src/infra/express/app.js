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

app.use((error, request, response, next) => {
  if (error) {
    response.status(500)
      .json({ 
        error: true, 
        code: error.code,
        message: error.message,
        stack: error.stack.split('\n')
      });
  }
});

export { app, port };