import express from 'express';
import { updateFeeDetails } from '../controllers/adminController.js';

const router = express.Router();

router.post('/update-fee', updateFeeDetails);

export default router;
