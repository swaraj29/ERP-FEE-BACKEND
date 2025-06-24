import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import adminRoutes from './routes/adminRoutes.js';
import confirmRoutes from './routes/confirmRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', adminRoutes);
app.use('/api', confirmRoutes);

export default app;
