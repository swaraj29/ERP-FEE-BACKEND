import express from 'express';
import { updateFeeDetails, getAllStudents } from '../controllers/adminController.js';

const router = express.Router();

router.post('/update-fee', updateFeeDetails);
router.get('/students', getAllStudents);

export default router;
