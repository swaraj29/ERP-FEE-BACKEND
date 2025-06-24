# ERP Fee Backend

A Node.js backend for managing student fee details, sending confirmation emails, and updating fee status. Built with Express, MongoDB, and Nodemailer.

## Features
- Update student fee details
- Send confirmation emails to students
- Confirm fee submission via email links
- View list of students (admin)
- RESTful API endpoints

## Getting Started

### Prerequisites
- Node.js v20+
- MongoDB database

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd erp-fee-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_uri
   EMAIL=your_email@gmail.com
   PASSWORD=your_email_app_password
   BASE_URL=https://erp-fee-backend.onrender.com
   # BASE_URL=http://localhost:3000
   ```
4. Seed the database (optional):
   ```bash
   npm run seed
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### 1. View All Students
- **URL:** `https://erp-fee-backend.onrender.com/api/students`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "<student_id>",
      "name": "Student Name",
      "email": "student@example.com",
      "totalFee": 10000,
      "dueAmount": 2000,
      "dueDate": "2025-07-01T00:00:00.000Z",
      "feeStatus": "Pending"
    },
    ...
  ]
  ```

### 2. Update Fee Details
- **URL:** `https://erp-fee-backend.onrender.com/api/update-fee`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "studentId": "<student_id>",
    "totalFee": 10000,
    "dueAmount": 2000,
    "dueDate": "2025-07-01"
  }
  ```
- **Response:**
  ```json
  { "message": "Fee updated & email sent" }
  ```

### 3. Confirm Fee Submission
- **URL:** `https://erp-fee-backend.onrender.com/api/confirm`
- **Method:** `GET`
- **Query Params:**
  - `student_id`: Student's ID
  - `response`: `yes` or `no`
- **Example:**
  `https://erp-fee-backend.onrender.com/api/confirm?student_id=123&response=yes`
- **Response:**
  - HTML message with updated status

## Postman Collection
See `postman_collection.json` for ready-to-use API requests.

## License
MIT
