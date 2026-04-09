# 🚀 TaskMaster Backend (Beginner Friendly)

## 📌 What is this project?

TaskMaster is a backend application that helps users:

* Create an account
* Login securely
* Create and manage tasks
* Assign tasks to users
* Work in teams

This project is built using **Node.js, Express, and MongoDB**.

---

## 🧠 Features

* ✅ User Registration & Login (JWT Authentication)
* ✅ Create, Update, Delete Tasks
* ✅ Assign Tasks to Users
* ✅ Add Comments to Tasks
* ✅ Create Teams & Add Members

---

## 🛠 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* bcrypt (Password Hashing)

---

## 📂 Project Structure

taskmaster-backend/
│── models/ → Database schemas
│── routes/ → API routes
│── middleware/ → Auth middleware
│── server.js → Main server file
│── .env → Environment variables
│── README.md → Project documentation

---

## ⚙️ Setup Instructions (Step-by-Step)

### 1️⃣ Clone the repository

git clone https://github.com/YOUR_USERNAME/taskmaster-backend.git

### 2️⃣ Go into project folder

cd taskmaster-backend

### 3️⃣ Install dependencies

npm install

### 4️⃣ Create .env file

Add this inside `.env`:

MONGO_URI=mongodb://127.0.0.1:27017/taskmaster
JWT_SECRET=secret123

---

### 5️⃣ Start MongoDB

Make sure MongoDB is running locally (via MongoDB Compass or services)

---

### 6️⃣ Run the server

npm start

---

### ✅ Server will run at:

http://localhost:5000

---

## 🔑 API Testing (Using Postman)

You can use Postman to test APIs.

---

### 🔹 1. Register User

POST /api/auth/register

Body:
{
"name": "Ashu",
"email": "[ashu@gmail.com](mailto:ashu@gmail.com)",
"password": "123456"
}

---

### 🔹 2. Login

POST /api/auth/login

Body:
{
"email": "[ashu@gmail.com](mailto:ashu@gmail.com)",
"password": "123456"
}

👉 Copy the token from response

---

### 🔹 3. Create Task

POST /api/tasks

Header:
Authorization: Bearer YOUR_TOKEN

Body:
{
"title": "My Task",
"description": "Test task",
"dueDate": "2026-05-01"
}

---

### 🔹 4. Get Tasks

GET /api/tasks

Header:
Authorization: Bearer YOUR_TOKEN

---

## ❗ Important Notes

* Always send token in header:
  Authorization: Bearer <token>
* Do not include quotes in token
* MongoDB must be running

---

## 🧪 Example Response

{
"_id": "...",
"title": "My Task",
"description": "Test task",
"status": "open"
}

---

## 👨‍💻 Author

Aakarshan

---

## 🎯 Conclusion

This project demonstrates:

* Backend development
* REST API design
* Authentication
* Database integration

---
