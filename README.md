# 🛒 eCommerce App

Version: \[React\] \[Redux Toolkit\] \[Tailwind CSS\] \[FakeStore API\]

A modern and responsive eCommerce web application built with React and
Redux Toolkit. Users can browse products from the FakeStore API, filter
them by category, search by keyword, view product details, and manage
their shopping cart with real-time updates.

---

## Features ✅

- 🔍 **Search** for products by keyword.\
- 🗂️ **Filter** products by categories (All, Electronics, Jewelry,
  Clothing).\
- 👀 **View** detailed product information.\
- ➕ **Add products** to the shopping cart.\
- ♻️ **Update quantities** or remove items directly in the cart.\
- 💰 **Dynamic price calculation** with subtotal, shipping, and
  total.\
- 📱 **Responsive design** with a clean and modern UI.

---

## Technologies Used 🛠️

- **React 19** (functional components + hooks)\
- **Redux Toolkit** (global state management for cart & products)\
- **React Router DOM v7** (navigation and routing)\
- **Axios** (fetching data from FakeStore API)\
- **Tailwind CSS v4** (styling and responsive layout)\
- **Lucide React** (modern icons)\
- **Vite** (fast development and build tool)

---

## Installation 💻

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
npm install
```

---

## Usage 📝

Start the development server:

```bash
npm run dev
```

Open <http://localhost:5173> in your browser.

- 🏠 Browse products on the home page.\
- 🔎 Search or filter by category.\
- 📄 Click **View Details** to see product information.\
- 🛍️ Add products to the cart.\
- 🛒 Go to the **Cart Page** to update quantities or remove items.

---

## Folder Structure 📁

    /src
      /App
        Store.js
      /components
        Home.jsx
        NavBar.jsx
        Footer.jsx
        ProductsGrid.jsx
        ProductCard.jsx
        ProductsDetails.jsx
        CartItem.jsx
        CardPage.jsx
      /features
        /cart
          CartSlice.js
        /products
          ProductSlice.js
      App.jsx
      index.css
      main.jsx

---

## Author 👤

**Hamza Alkhader**

- GitHub: [@hamza-kh2003](https://github.com/hamza-kh2003)\
- LinkedIn: [Hamza
  Alkhader](https://www.linkedin.com/in/hamza-alkhader)

---

## Show your support ⭐

If you found this project useful, don't forget to give it a ⭐️!
