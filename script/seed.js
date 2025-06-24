// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Student from '../models/Student.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seedStudents = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to DB");

    const students = [
      {
        name: "Rahul Sharma",
       "email": "028zoro@gmail.com",
        totalFee: 50000,
        dueAmount: 5000,
        dueDate: new Date("2025-07-10")
      },
      {
        name: "Priya Verma",
        email: "1111sanketsingh@gmail.com",
        totalFee: 60000,
        dueAmount: 10000,
        dueDate: new Date("2025-07-15")
      },
      {
        name: "Amit Patel",
        email: "nexusomnitech@gmail.com",
        totalFee: 55000,
        dueAmount: 0,
        dueDate: new Date("2025-07-01"),
        feeStatus: "Confirmed"
      }
    ];

    await Student.deleteMany(); // Optional: Clears old data
    await Student.insertMany(students);

    console.log("✅ Seed data inserted");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

seedStudents();
