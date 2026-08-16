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

## Environment Variables (`config.env`)

````env
PORT=4000
DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=5d
COOKIE_EXPIRE=5
```


````
