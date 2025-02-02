# 📝 Blog REST API with Node.js, Express, and MongoDB  

This project is a **RESTful API** for a simple **Blog Application**, built using **Node.js, Express.js, MongoDB, and JWT authentication**. The API allows users to **create, read, update, and delete** blog posts securely.  

---

## 🚀 Features  

- **User Authentication** using **JWT (JSON Web Token)**  
- **CRUD operations** for blog posts (**Create, Read, Update, Delete**)  
- **Secure API routes** with authentication  
- **MongoDB** as the database with **Mongoose ORM**  
- **Express.js** as the backend framework  
- **Postman Collection** for testing API requests  

---

## 🏗️ Tech Stack  

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – ODM (Object Data Modeling)  
- **JWT (JSON Web Token)** – Secure authentication  
- **Postman** – API testing tool  

---

## 📂 Project Structure  

📦 blog-api  
 ┣ 📂 config/        → Database configuration  
 ┣ 📂 middleware/    → Middleware functions (e.g., authentication)  
 ┣ 📂 models/        → Mongoose models (User, Post)  
 ┣ 📂 routes/        → API routes (postRoutes, authRoutes)  
 ┣ 📂 controllers/   → API logic (handling requests)  
 ┣ 📜 .env           → Environment variables (secrets, DB connection)  
 ┣ 📜 server.js      → Main entry point  
 ┗ 📜 package.json   → Project dependencies  


---

## 🔧 Installation and Setup  

### 1️⃣ Clone the repository  
```
git clone [YOUR_GITHUB_REPO_URL]  
cd blog-app  
```


2️⃣ Install dependencies

    npm install

3️⃣ Create a .env file in the root directory and add:

    PORT=5000  
    MONGO_URI=your_mongodb_connection_string  
    JWT_SECRET=your_secret_key  
4️⃣ Start the server

    npm run dev

  🔹 The server will run at: http://localhost:5000

---
## 🔑 API Endpoints  

### 🧑‍💻 Authentication  

- **Register a New User**  
  - **Endpoint:** `POST /api/auth/register`  
  - **Description:** Allows a new user to create an account  
  - **Authentication:** ❌ Not required  

- **Login and Get Token**  
  - **Endpoint:** `POST /api/auth/login`  
  - **Description:** Logs in the user and returns a JWT token  
  - **Authentication:** ❌ Not required  

---

### 📝 Blog Posts  

- **Create a New Post**  
  - **Endpoint:** `POST /api/posts`  
  - **Description:** Allows an authenticated user to create a blog post  
  - **Authentication:** ✅ Required  

- **Get All Posts**  
  - **Endpoint:** `GET /api/posts`  
  - **Description:** Fetches all blog posts  
  - **Authentication:** ❌ Not required  

- **Get a Post by ID**  
  - **Endpoint:** `GET /api/posts/:id`  
  - **Description:** Fetches a single post using its ID  
  - **Authentication:** ❌ Not required  

- **Update a Post**  
  - **Endpoint:** `PUT /api/posts/:id`  
  - **Description:** Allows an authenticated user to update a post  
  - **Authentication:** ✅ Required  

- **Delete a Post**  
  - **Endpoint:** `DELETE /api/posts/:id`  
  - **Description:** Allows an authenticated user to delete a post  
  - **Authentication:** ✅ Required  

---

### 🔥 Testing with Postman  

- **Import the Postman collection** ([Insert Postman Collection URL])  
- **Set the JWT token** in the headers for protected routes  

---

### 📌 Future Improvements  

- ✔ **Add User Roles** (Admin, Author, Reader)  
- ✔ **Implement Comment System** for posts  
- ✔ **Enhance Error Handling & Validation**  

---

### 🤝 Contributing  

- **Fork the repository**  
- **Create a new branch (`feature-branch`)**  
- **Submit a pull request**  

---

### 📜 License  

- This project is **open-source** and available under the **MIT License**.  
