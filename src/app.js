import express from 'express';
import usersRoutes from './routes/users.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(usersRoutes);

export default app;