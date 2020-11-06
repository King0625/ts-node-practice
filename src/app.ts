import express, { Application } from 'express';
import { todoRouter } from './routes/todo';

const app: Application = express();
// app.use("api/todos", todoRouter);      // Not working
app.use("/api/todos", todoRouter);

export default app;

