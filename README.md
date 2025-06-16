### ✅ `README.md` for Your Current MERN Project

```markdown
# 🛒 MERN Stack E-Commerce Project

This is a simple E-Commerce application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to view, sort, and filter products, and simulate purchases with a "Buy Now" feature.

## 🚀 Features Implemented

- View all available products
- Sort products by price
- Filter products by:
  - Price range
  - Category (Men / Women)
- Add items to cart
- Remove items from cart
- Display cart items
- Buy Now (with total price calculation)
- Products are fetched from a MongoDB backend
- Admin Dashboard (for product management)

## 📦 Tech Stack

### Frontend
- React
- Context API for state management
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose

## 🗃️ Folder Structure

```

E-commerce/
├── client/          # React Frontend
│   ├── src/
│   │   ├── components/     # ProductList, ProductItem, Cart, Admin Dashboard
│   │   ├── context/        # ItemContext for global state
│   │   └── App.js
├── server/          # Express Backend
│   ├── models/      # Mongoose Product model
│   ├── routes/      # API Routes (e.g., /api/products)
│   └── server.js

````

## 🛠️ How to Run Locally

### Prerequisites

- Node.js
- MongoDB installed and running

### 1. Clone the Repository

```bash
git clone https://github.com/Levi-7-7-7/MERN.git
cd MERN/E-commerce
````

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

### 3. Start the App

#### Backend

```bash
npm start
```

#### Frontend (in a separate terminal)

```bash
npm start
```

App should now be running at:
🔗 `http://localhost:3000`

## 📌 To-Do (Upcoming Features)

* [ ] Add user authentication (JWT)
* [ ] Login & Register frontend forms
* [ ] Protected routes for admin
* [ ] Deploy to a live server (like Render or Vercel)

---

## 📷 Screenshots


![Picture1](https://github.com/user-attachments/assets/8f30ca9b-daa5-43d3-92b1-7f3ae6275c44)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```
