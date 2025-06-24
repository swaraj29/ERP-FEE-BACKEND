import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware (optional)
// app.use(express.json());

// ✅ Root route - basic health check or live indicator
app.get('/', (req, res) => {
  res.send('ERP Fee Backend is live!');
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      const renderURL = process.env.RENDER_EXTERNAL_URL;
      const logURL = renderURL ? renderURL : `http://localhost:${PORT}`;
      console.log(`🚀 Server running at ${logURL}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect DB", err);
  });
