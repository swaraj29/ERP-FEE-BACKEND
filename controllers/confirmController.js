import Student from '../models/Student.js';

export const handleConfirmation = async (req, res) => {
  try {
    const { student_id, response } = req.query;
    const status = response === 'yes' ? 'Confirmed' : 'Pending';

    await Student.findByIdAndUpdate(student_id, { feeStatus: status });

    res.send(`Thank you! Your fee status has been updated to: ${status}`);
  } catch (err) {
    res.status(500).send('Something went wrong.');
  }
};
