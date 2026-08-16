# Node.js E-Commerce Backend

A production-ready Node.js backend for an e-commerce platform using Express, MongoDB Atlas, and JWT authentication.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Auth:** JSON Web Tokens (JWT) & bcryptjs
- **Other:** cookie-parser, dotenv, validator

## Setup Instructions

1. Clone the repository and run `npm init -y`.
2. Install dependencies:
   `npm i express mongoose dotenv bcryptjs jsonwebtoken cookie-parser validator`
3. Install dev dependencies:
   `npm i nodemon --save-dev`
4. Set up your `backend/config/config.env` file (see environment variables below).
5. Run the server using `npm run dev`.

## API Routes

User & Auth Routes (/api/v1)
POST /register - Register a new user

POST /login - Login user

GET /logout - Logout user

GET /me - Get user details (Protected)

Product Routes (/api/v1)
GET /products - Get all products

POST /admin/product/new - Create a product (Protected, Admin)

PUT /admin/product/:id - Update a product (Protected, Admin)

DELETE /admin/product/:id - Delete a product (Protected, Admin)

Order Routes (/api/v1)
POST /order/new - Create new order (Protected)

GET /order/:id - Get single order details (Protected)

GET /orders/me - Get logged-in user orders (Protected)

---

### ⚙️ Core Configuration & Server

**`backend/server.js`**

```javascript
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Config
dotenv.config({ path: "backend/config/config.env" });

// Connect to MongoDB Atlas
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
```

## Environment Variables (`config.env`)

````env
PORT=4000
DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=5d
COOKIE_EXPIRE=5
```


````
