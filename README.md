# Jewellery-Shop
# 💎 Jewelry Store Backend API

A simple full-stack e-commerce backend built with NestJS and TypeORM.
This project handles products and shopping cart functionality.

---

## 🚀 Features

* 🛍️ View all products
* ➕ Add product to cart
* 🔄 Update cart item quantity
* ❌ Remove item from cart
* ⭐ Featured products support

---

## 🧱 Tech Stack

* **Backend:** NestJS
* **Database:** MySQL / PostgreSQL
* **ORM:** TypeORM

---

## 📦 API Endpoints

### 🛍️ Products

* `GET /products` → Get all products
* `POST /products` → Add new product

### 🛒 Cart

* `GET /cart` → Get cart items
* `POST /cart` → Add item to cart
* `PATCH /cart/:id` → Update quantity
* `DELETE /cart/:id` → Remove item

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/your-username/jewelry-store-backend.git

# Go into folder
cd jewelry-store-backend

# Install dependencies
npm install

# Run project
npm run start
```

---

## 🗄️ Database

Make sure you have a database running and update your `.env` file:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_NAME=jewelry_db
```

---

## 💡 How It Works

* Products are stored in the database
* Cart stores selected items
* If a product is added again → quantity increases
* If not → new cart item is created

---

## 🎯 Future Improvements

* 👤 User authentication
* 💳 Checkout system
* 🧾 Order management
* 🛠️ Admin panel

---

## 👩‍💻 Author
Qurrat-ul-Ain Hasnain

Your Name
