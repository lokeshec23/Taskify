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
