# 🛒 MERN Stack E-commerce Website

This is a full-stack E-commerce application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to browse products, add items to a shopping cart, and simulate purchases. 

---

## 🚀 Features

- Browse a product list with images and details.
- Add items to the cart.
- View total items and price in cart.
- Buy now simulation.
- Responsive design.
- Admin product control (optional).

---

## 🛠️ Tech Stack

| Tech         | Used For          |
|--------------|-------------------|
| MongoDB      | Database          |
| Express.js   | Backend Framework |
| React.js     | Frontend UI       |
| Node.js      | Runtime Environment |
| FontAwesome  | Icons             |
| CSS          | Styling           |

---

## 📁 Folder Structure

```
E-commerce/
├── client/         # React frontend
│   ├── src/
│   ├── public/
├── server/         # Express + MongoDB backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
├── .gitignore
└── README.md
```

---

## ⚙️ Environment Variables Setup

To run the backend, create a `.env` file inside the `server/` directory with the following content:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

> Replace the values with your actual credentials.

---

## 📦 Installation & Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Levi-7-7-7/MERN---Ecommerce.git
cd MERN---Ecommerce
```

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

### 3. Create the `.env` file

As mentioned above, add the required `.env` file inside `/server`.

### 4. Run the App

#### Backend
```bash
cd server
npm start
```

#### Frontend
Open a new terminal:

```bash
cd client
npm start
```

Now, the app will be running at:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## ❗ Important Notes

- Make sure MongoDB is running locally or use MongoDB Atlas.
- Products might not show if your MongoDB collection is empty. Insert some data manually or implement a product seed script.
- The `.env` file is required but excluded from GitHub for security.

---

## 📌 TODO (if extending)

- Implement user authentication with JWT (login/signup/logout).
- Add admin panel to manage products.
- Store cart items in MongoDB per user.
- Integrate payment gateway like Razorpay or Stripe.

---

## 🧑‍💻 Author

[Levi-7-7-7](https://github.com/Levi-7-7-7)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
