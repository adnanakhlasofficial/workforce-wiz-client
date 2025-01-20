# **Workforce Wiz Server**

This repository contains the frontend and backend server for **Workforce Wiz**, a corporate workforce management platform. The server provides RESTful API endpoints to manage employee tasks, payroll, HR, and admin functionalities, including payments and salary management.

---

## **Overview**

Workforce Wiz is a corporate workforce management platform that enables:

1. **Employees** to submit tasks and view their progress.
2. **HR** to monitor employee progress, request payments, and manage employee details.
3. **Admins** to handle payments, update salaries, promote/demote employees, and manage overall workforce data.

Server Base URL: **`https://workforce-wiz.vercel.app/`**
Frontend Live URL: **`https://workforce-wiz.netlify.app/`**

---

## **API Endpoints**

### **Authentication**

- `POST /login`: Login and generate JWT.
- `POST /logout`: Logout and clear JWT.

### **Employee Management**

- `POST /employee`: Add a new employee.
- `GET /employee/:email`: Get an employee by email.
- `GET /employee/details/:email`: Get detailed employee information.
- `PATCH /employee/:id`: Verify employee status (HR only).
- `PATCH /employee/role/:email`: Promote an employee to HR (Admin only).
- `PATCH /employee/fired/:email`: Terminate an employee (Admin only).

### **Payroll Management**

- `GET /employee/payrolls`: Get all payroll tasks (Admin only).
- `POST /employee/payroll`: Add payroll details (HR only).
- `PATCH /employee/payment/:email`: Update payment details (Admin only).
- `POST /create-payment`: Create a Stripe payment intent.
- `GET /employee/payment-history/:email`: Retrieve payment history for an employee.

### **Task Management**

- `POST /employee/task`: Add a task for an employee.
- `GET /employee/tasks/:email`: Get tasks assigned to a specific employee.
- `PUT /employee/task/:id`: Update an employee task.
- `DELETE /employee/task/:id`: Delete an employee task.
- `GET /progress`: Retrieve task progress for HR.

### **HR Tools**

- `GET /progress/emails`: Retrieve a list of employee emails for progress tracking.
- `GET /employees/:email`: Get all employees (excluding HR and the requester).

### **Admin Tools**

- `GET /employees/all/:email`: Get all employees except admins.
- `PATCH /employee/salary/:email`: Update an employee's salary.

### **Contact Management**

- `POST /contacts`: Save a message or contact info.
- `GET /contacts`: Retrieve all contact messages.

---

## **Features**

- **Employee Task Management:** Employees can create, view, and manage tasks.
- **HR Dashboard:** HR can monitor employee progress, request payments, and view contact information.
- **Admin Dashboard:** Admins can handle payments, promote/demote employees, and manage payroll.
- **Secure Authentication:** JWT-based authentication with cookies for session management.
- **Payment Integration:** Stripe is used to handle payment intents and salary transactions.
- **Role-Based Access Control:** Separate access levels for Employees, HR, and Admin.

---

## **Technologies Used**

### **Backend:**

- **Node.js** and **Express.js**: For building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Stripe**: Payment gateway for handling employee payments.
- **JWT**: For secure authentication and session management.

### **Frontend Dependencies:**

(For integration with the frontend)

- **React**: For building the user interface.
- **React Router DOM**: For routing.
- **React Query (TanStack Query)**: For data fetching and state management.
- **Tailwind CSS**: For styling.
- **Recharts**: For visualizing data in charts.
- **React Toastify**: For alert and notification handling.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/workforce-wiz-server.git
   cd workforce-wiz-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (`.env` file):
   ```env
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET_TOKEN=<your-secret-key>
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   NODE_ENV=production
   ```
4. Run the server:
   ```bash
   npm start
   ```

---

## **Deployment**

The server is deployed on **Vercel**:
**Base URL:** [https://workforce-wiz.vercel.app/](https://workforce-wiz.vercel.app/)
Frontend Live URL: [https://workforce-wiz.netlify.app/](https://workforce-wiz.netlify.app/)

---

## **Admin Access**

- **Admin Email:** `jhankar.mahbub@gmail.com`
- **Admin Password:** `$Jhankar`

---

## **Contact**

For any queries or support, please reach out via the contact page of **Workforce Wiz**.
