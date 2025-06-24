# API Endpoints

## 1. Update Fee Details
- **Endpoint:** `POST https://erp-fee-backend.onrender.com/api/update-fee`
- **Description:** Update a student's fee details and send a confirmation email.
- **Request Body:**
  - `studentId` (string): Student's MongoDB ID
  - `totalFee` (number): Total fee amount
  - `dueAmount` (number): Due amount
  - `dueDate` (string): Due date (YYYY-MM-DD)
- **Response:**
  - `{ "message": "Fee updated & email sent" }`

## 2. Confirm Fee Submission
- **Endpoint:** `GET https://erp-fee-backend.onrender.com/api/confirm`
- **Description:** Confirm fee submission via email link.
- **Query Parameters:**
  - `student_id` (string): Student's MongoDB ID
  - `response` (string): `yes` or `no`
- **Response:**
  - HTML message with updated status

---

For more details, see the Postman collection and README.
