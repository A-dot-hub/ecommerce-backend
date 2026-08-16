# Node.js E-Commerce Backend API

A production-style Node.js backend for an e-commerce platform. This project serves as the foundational architecture for managing users, products, authentication, and orders.

## ✅ Project Acceptance Criteria Met

- **Clean MVC Folder Structure:** The codebase is strictly organized into Models, Views (represented by frontend JSON responses), and Controllers, ensuring scalability and separation of concerns.
- **Environment Variables:** All sensitive data (MongoDB URI, JWT Secrets, Ports) are completely isolated from the source code using `dotenv`.
- **Auth Middleware & Private Routes:** Custom JWT middleware automatically verifies tokens via HTTP-only cookies, protecting private routes and enforcing Admin-only actions.
- **Product and Order CRUD:** Full Create, Read, Update, and Delete operations implemented for products and dynamic order generation.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Security & Auth:** JSON Web Tokens (JWT), bcryptjs
- **Utilities:** cookie-parser, validator

---

## 📁 Folder Structure (MVC)

```text
ecommerce-backend/
├── backend/
│   ├── config/
│   │   ├── config.env          # Environment variables (ignored in git)
│   │   └── database.js         # MongoDB connection setup
│   ├── controllers/            # Core business logic
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middleware/             # Custom middleware
│   │   ├── auth.js             # JWT Verification & Admin Roles
│   │   ├── catchAsyncErrors.js # Async error wrapper
│   │   └── error.js            # Global Error Handler
│   ├── models/                 # Mongoose Database Schemas
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/                 # Express API routing
│   │   ├── orderRoute.js
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   ├── utils/
│   │   └── errorHandler.js     # Custom error class
│   ├── app.js                  # Express app setup
│   └── server.js               # Server entry point
├── package.json
└── README.md

🚀 Setup Instructions
1. Clone the repository
git clone <your-github-repo-url>
cd ecommerce-backend

2. Install Dependencies

npm install

3. Environment Variables Setup
Create a file named config.env inside the backend/config/ directory. Add the following variables:

PORT=4000
DB_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=5d
COOKIE_EXPIRE=5

4. Run the Server
For Development (Auto-restarts via nodemon):
npm run dev

For Production:
npm start

📡 API Route Documentation
Base URL: http://localhost:4000/api/v1

📡 API Route Documentation
Base URL: http://localhost:4000/api/v1

--------------------------------------------------
👤 USER & AUTHENTICATION ROUTES
--------------------------------------------------
[POST] /register
➔ Register a new user & set JWT cookie (Public)

[POST] /login
➔ Login user & set JWT cookie (Public)

[GET] /logout
➔ Clear JWT cookie (Public)

[GET] /me
➔ Get logged-in user profile details (🔒 Private)


--------------------------------------------------
🛍️ PRODUCT ROUTES (CRUD)
--------------------------------------------------
[GET] /products
➔ Get all products (Public)

[GET] /product/:id
➔ Get details of a single product (Public)

[POST] /admin/product/new
➔ Create a new product (🔒 Private - Admin)

[PUT] /admin/product/:id
➔ Update an existing product (🔒 Private - Admin)

[DELETE] /admin/product/:id
➔ Delete a product (🔒 Private - Admin)


--------------------------------------------------
📦 ORDER ROUTES (CRUD)
--------------------------------------------------
[POST] /order/new
➔ Place a new order (🔒 Private)

[GET] /order/:id
➔ Get details of a single order (🔒 Private)

[GET] /orders/me
➔ View all orders for logged-in user (🔒 Private)


--------------------------------------------------
🔐 AUTHENTICATION FLOW NOTE
--------------------------------------------------
• This API uses HTTP-Only Cookies to handle JWTs automatically.
• When testing in Postman, simply hit the /login or /register route first.
• Postman will automatically save the secure cookie and attach it to subsequent requests for any protected (Private) routes.
```
