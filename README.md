# 🚀 LinkManager

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![Render](https://img.shields.io/badge/Deployed-Render-purple)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

A production-ready full-stack web application that allows users to securely manage and store personal links using JWT authentication.

🌐 **Live Demo:**  
https://linkmanager-fp28.onrender.com

---

## ✨ Why This Project?

LinkManager demonstrates:

- Full-stack development (Frontend + Backend)
- REST API design
- Authentication using JWT
- Secure password hashing
- MongoDB database integration
- Cloud deployment (Render)
- Environment variable configuration
- Production hosting

This project showcases real-world backend architecture and deployment workflow.

---

## 🧩 Features

- ✅ User Registration
- ✅ Secure Login (JWT Authentication)
- ✅ Password Hashing (bcrypt)
- ✅ Add Links
- ✅ View Personal Links
- ✅ Delete Links
- ✅ Persistent Database Storage
- ✅ Fully Deployed & Publicly Accessible

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS

### Frontend
- HTML
- CSS
- Vanilla JavaScript

### Deployment
- Render (Backend Hosting)
- MongoDB Atlas (Database)


---

## 📂 Project Structure

```
LinkManager/
│
├── models/
│   ├── User.js
│   └── Link.js
│
├── routes/
│   ├── auth.js
│   └── links.js
│
├── public/
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation (Run Locally)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/adityasing9/LinkManager.git
cd LinkManager
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

### 4️⃣ Start Server

```bash
node server.js
```

Visit:

```
http://localhost:5000
```

---

## 🔐 Environment Variables

| Variable   | Description                       |
|------------|-----------------------------------|
| PORT       | Server port number                |
| MONGO_URI  | MongoDB connection string         |
| JWT_SECRET | Secret key used for JWT signing   |

---

## 🚀 Deployment

This application is deployed using **Render** with automatic GitHub integration.

Every push to the `main` branch triggers automatic redeployment.

---

## 📈 Future Improvements

- Edit link functionality
- Pagination for large link lists
- User profile section
- Password validation rules
- Rate limiting
- Refresh token authentication
- Custom domain

---

## 👨‍💻 Author

**Aditya Singh**

GitHub:  
https://github.com/adityasing9

---

## 📜 License

This project is for educational and portfolio purposes.
