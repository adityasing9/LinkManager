# 📌 LinkManager

A full-stack link management web application where users can register, log in, and store their personal links securely.

🌐 **Live Demo:**  
https://linkmanager-fp28.onrender.com

---

## 🚀 Features

- User Registration
- Secure Login (JWT Authentication)
- Add Links
- View Saved Links
- Delete Links
- MongoDB Database Storage
- Fully Deployed on Render

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcryptjs (Password Hashing)

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

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
└── README.md
```

---

## ⚙️ Installation (Run Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/adityasing9/LinkManager.git
cd LinkManager
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```bash
node server.js
```

Open:

```
http://localhost:5000
```

---

## 🔐 Environment Variables

| Variable   | Description                          |
|------------|--------------------------------------|
| PORT       | Server Port                          |
| MONGO_URI  | MongoDB Connection String            |
| JWT_SECRET | Secret key for JWT authentication    |

---

## 📈 Future Improvements

- Password validation
- Edit links feature
- User profile page
- Pagination
- UI improvements
- Custom domain

---

## 👨‍💻 Author

Aditya Singh  

GitHub:  
https://github.com/adityasing9

---

## 📜 License

This project is for educational and portfolio purposes.
