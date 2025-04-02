```markdown
## 🖥️ Express Server for Users and Products API

### 📄 Description

This project is a basic **Express.js** server built with **Node.js**. It serves static files from the `public` folder and provides a RESTful API for managing **products** and **users**.

The server listens on **port 3000** and includes:

- Static file serving for web content (HTML, CSS, etc.)
- Modular API routes for products and users
- JSON body parsing
- Error handling for 404 routes

---

### ✅ Features

✔️ Serves static files from the `public` folder  
✔️ Full CRUD (Create, Read, Update, Delete) operations for products  
✔️ User API with filtering by age, city, and active status  
✔️ Validates product price and stock on creation/update  
✔️ 404 fallback page for unknown routes

---

### 👩‍💻 Programmers

- **Stephanos Khoury**  
- **Rula Yosef**

---

### 🧪 Example Routes

#### Home Page
```
GET http://localhost:3000/
→ Returns basic HTML welcome message
```

#### Get All Products
```
GET http://localhost:3000/api/products
```

#### Add Product
```
POST http://localhost:3000/api/products
Body:
{
  "id": 6,
  "name": "Keyboard",
  "price": 150,
  "stock": 20
}
```

#### Update Product
```
PUT http://localhost:3000/api/products/6
Body:
{
  "name": "Mechanical Keyboard",
  "price": 200,
  "stock": 18
}
```

#### Delete Product
```
DELETE http://localhost:3000/api/products/6
```

#### Filter Users by Age
```
GET http://localhost:3000/api/users?age=30
→ Returns users older than 30
```

---

### 🧾 Code Structure

#### 🔹 `app.js`
- Initializes Express
- Sets up middleware and routing
- Handles 404 errors
- Starts the server

#### 🔹 `data.js`
- Contains in-memory arrays for `products` and `users`
- Products have: `id`, `name`, `price`, `stock`
- Users have: `id`, `name`, `email`, `age`, `city`, `isActive`

#### 🔹 `routes/users.js` & `routes/product.js`
- Contains route logic for respective endpoints

---

### 🌐 Static Files

You can serve static HTML/CSS by placing files in the `public` folder:
```
public/
  ├── index.html
  ├── styles.css
  └── logo.png
```

Access them via:
```
http://localhost:3000/index.html
http://localhost:3000/styles.css
```
### 🚀 Run the Server

Make sure you have **Node.js** installed.

To start the server:
node app.js

