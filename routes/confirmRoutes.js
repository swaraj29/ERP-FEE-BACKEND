import express from 'express';
import { handleConfirmation } from '../controllers/confirmController.js';

const router = express.Router();

router.get('/confirm', handleConfirmation);

export default router;
