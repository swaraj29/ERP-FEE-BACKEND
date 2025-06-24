import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  totalFee: Number,
  dueAmount: Number,
  dueDate: Date,
  feeStatus: { type: String, default: 'Pending' }
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
