# Taskify

**Taskify** is a full-fledged task management application built using the **MERN** stack. It allows users to register, log in, and manage their tasks efficiently with features like task creation, updating, deleting, and tracking due dates. The app uses secure authentication via **JSON Web Tokens (JWT)** and validates inputs with **express-validator**.

---

## Features

- **User Authentication**: Secure login and token-based authentication.
- **Task Management**:
  - Add new tasks with a name, description, and due date.
  - View tasks in a tabular format.
  - Edit and delete tasks.
- **Responsive UI**: User-friendly interface styled with **Bootstrap**.
- **Backend Validation**: Validates all incoming requests using **express-validator**.
- **Persistence**: Data stored in a **MongoDB** database.

---

## Tech Stack

- **Frontend**: React, Bootstrap, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: express-validator

---

## Installation & Setup

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (running locally or on a cloud service like MongoDB Atlas)
- **Git**

### Clone the Repository

```bash
git clone <your-github-repo-url>
cd taskify
Backend Setup
Navigate to the backend folder:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the backend folder and add the following:
env
Copy code
PORT=5000
MONGO_URI=<your-mongo-connection-string>
JWT_SECRET=<your-jwt-secret>
Start the backend server:
bash
Copy code
npm run start
Frontend Setup
Navigate to the frontend folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the frontend folder and add the following:
env
Copy code
VITE_API_URL=http://localhost:5000/api
Start the frontend server:
bash
Copy code
npm run dev
Usage
Register: Sign up with your email and password.
Login: Authenticate yourself with the registered credentials.
Task Inputs:
Add new tasks by filling in the task name, description, and due date.
View all tasks in a scrollable table with options to edit or delete.
Task Table:
Tasks are displayed in a tabular format for easy tracking and management.
API Endpoints
Here are some of the key backend routes:

POST /api/register: Register a new user.
POST /api/login: Log in and receive a JWT.
POST /api/tasks: Create a new task (requires authentication).
GET /api/tasks: Retrieve all tasks for the authenticated user.
PUT /api/tasks/:id: Update a specific task (requires authentication).
DELETE /api/tasks/:id: Delete a specific task (requires authentication).
