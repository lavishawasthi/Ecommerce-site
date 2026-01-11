# 🛒 MERN E-Commerce Website

A full-stack **E-Commerce web application** built using the **MERN stack** with secure authentication, role-based authorization, online payments, and a fully responsive UI.

This project includes **User**, **Admin**, and **Product Management** features along with **Stripe and Razorpay payment gateway integration**.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router
- Responsive Design (Mobile & Desktop)

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Multer (Image Upload)
- Stripe Payment Gateway
- Razorpay Payment Gateway

---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Secure user login & registration
- Role-based authorization:
  - User
  - Admin
- Protected routes using middleware

---

## ✨ Features

### 👤 User Features
- User registration & login
- JWT-protected routes
- Add products to cart
- Update cart quantity
- Place orders
- View personal order history
- Online payments using:
  - Stripe
  - Razorpay

---

### 🛠 Admin Features
- Admin login
- Add new products with multiple images
- Remove products
- View all user orders
- Update order status (Processing, Shipped, Delivered, etc.)

---

### 📦 Product Management
- Add products with up to **4 images**
- Fetch product list
- View single product details
- Image upload handled using **Multer**

---

## 🔗 API Routes Overview

### 🔑 User Routes
POST /api/user/register  
POST /api/user/login  
POST /api/user/admin  

---

### 🛒 Cart Routes (Protected)
POST /api/cart/get  
POST /api/cart/add  
POST /api/cart/update  

---

### 📦 Product Routes
GET  /api/product/list  
POST /api/product/add  
POST /api/product/remove  
POST /api/product/single  

---

### 🧾 Order Routes

User:
POST /api/order/place  
POST /api/order/stripe  
POST /api/order/razorpay  
POST /api/order/userorders  

Admin:
POST /api/order/list  
POST /api/order/status  

Payment Verification:
POST /api/order/verifyStripe  
POST /api/order/verifyRazorpay  

---

## 🧱 Middleware Used

- authUser → JWT-protected user routes
- adminAuth → Admin-only access
- multer → Image upload handling

---

## 📁 Project Structure

project/
├── frontend/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── admin/

---

## ⚙️ Environment Variables

Create a `.env` file inside `backend/`:

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
STRIPE_SECRET_KEY=your_stripe_secret  
RAZORPAY_KEY_ID=your_razorpay_key  
RAZORPAY_KEY_SECRET=your_razorpay_secret  

---

## ▶️ Run Locally

Backend:
cd backend  
npm install  
npm start  

Frontend:
cd frontend  
npm install  
npm run dev  

---

## 📱 Responsive Design

- Fully responsive UI
- Optimized for mobile and desktop
- Styled using Tailwind CSS

---

## 🎯 Future Improvements
- Product reviews & ratings
- Wishlist functionality
- Email notifications
- Order invoice generation
- Admin analytics dashboard

---

## 👨‍💻 Author

Lavish Awasthi  
MERN Stack Developer
