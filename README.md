# 🚀 Real-Time Chat Application

A Full-Stack Real-Time Chat Application built with:

- **MERN Stack (MongoDB, Express, React, Node.js)**
- **Socket.io for real-time messaging**
- **TailwindCSS + DaisyUI for UI**
- **JWT for Authentication**
- **Cloudinary for image uploads**

---

## 📌 Features

- 🔐 User Authentication (Login/Register)
- 💬 Real-time chat with Socket.io
- 🟢 Online user status
- 🖼️ Profile image upload (via Cloudinary)
- 🌐 Global state management via Zustand
- ✅ Error handling both client-side and server-side

---

## 🏗️ Project Structure

/chatApp
│
├── /backend # Express.js API + MongoDB + Socket.io server
│
└── /frontend # React frontend with Tailwind CSS

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js installed
- MongoDB Atlas account or Local MongoDB
- Cloudinary account (for image uploads)

---

## 🖥️ Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
2. **Install dependencies**

bash
Copy
Edit
npm install
Create a .env file in /backend:

env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
Start the Backend Server

bash
Copy
Edit
npm run dev
Backend runs at:

arduino
Copy
Edit
http://localhost:5001
🎨 Frontend Setup
Navigate to frontend directory

bash
Copy
Edit
cd ../frontend
Install dependencies

bash
Copy
Edit
npm install
Start the React App

bash
Copy
Edit
npm start
Frontend runs at:

arduino
Copy
Edit
http://localhost:3000
🔐 Cloudinary Setup
Register at Cloudinary

Get the Cloud name, API Key, and API Secret from the Cloudinary dashboard.

Add them to the .env file in /backend.

🌐 MongoDB Setup
Create a MongoDB Atlas cluster at:
https://www.mongodb.com/cloud/atlas/register

Get your MongoDB URI and set it in the .env file.

🚀 Deployment
For production, you can deploy:

Backend: on Render, Railway, or Heroku

Frontend: on Vercel, Netlify, or Firebase Hosting

✅ Commands Quick Summary
Step	Command
Install Backend	cd backend && npm install
Start Backend	npm run dev
Install Frontend	cd frontend && npm install
Start Frontend	npm start
