import Student from '../models/Student.js';
import sendEmail from '../services/emailService.js';

export const updateFeeDetails = async (req, res) => {
  try {
    const { studentId, totalFee, dueAmount, dueDate } = req.body;

    const student = await Student.findByIdAndUpdate(
      studentId,
      { totalFee, dueAmount, dueDate, feeStatus: 'Pending' },
      { new: true }
    );

    const yesLink = `${process.env.BASE_URL}/api/confirm?student_id=${student._id}&response=yes`;
    const noLink = `${process.env.BASE_URL}/api/confirm?student_id=${student._id}&response=no`;

    const emailText = `
Dear ${student.name},

Your updated fee due is Rs.${dueAmount}.

Please confirm whether you have submitted the fees:
✅ Yes: ${yesLink}
❌ No: ${noLink}
`;

    await sendEmail(student.email, 'Fee Submission Confirmation', emailText);

    res.status(200).json({ message: 'Fee updated & email sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
