# NewHome

NewHome is a real estate listings website built for a coursework at FMI using the MERN stack (MongoDB, Express, React, and Node.js). It provides a robust platform for browsing properties, viewing detailed propety information, managing a favourites list, and requesting for seller's information.
The project is designed with separation between the frontend and backend to allow for scalability and ease of maintenance.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

- **Product (Property) Catalog:** Browse through a list of products.
- **Product Details:** Detailed view for each product including description, images, pricing, and contact information.
- **Favourites List:** Add or remove products and view the list dynamically.
- **Request info process:** Request sensitive data for the seller and receive it privately via email.
- **API Integration:** RESTful API built with Express to serve product data from MongoDB.

---

## Technologies Used

- **Frontend:** React, React Router, Redux, Bootstrap, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Development Tools:** Nodemon, Concurrently, dotenv

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/firstshop.git
   cd firstshop
   ```

2. **Install backend dependencies:**

   At the root of the project (where the main `package.json` is located), install the server-side dependencies:

   ```bash
   npm install
   ```

3. **Install frontend dependencies:**

   Navigate to the frontend directory and install the dependencies:

   ```bash
   cd frontend
   npm install
   ```

   Then return to the project root:

   ```bash
   cd ..
   ```

---

## Configuration

1. **Environment Variables:**

   Create a `.env` file in the root of your project (or in the backend folder if configured that way) based on the provided `example.env`. At a minimum, include:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   ```

2. **Database Connection:**

   The backend is configured to connect to MongoDB using Mongoose. Ensure you have a MongoDB instance running and use its connection string in the `.env` file.

---

## Available Scripts

From the root directory, you can run:

- **Start the application:**

  ```bash
  npm start
  ```

  This command runs the backend server using Node.

- **Start in development mode:**

  ```bash
  npm run dev
  ```

  This command uses Nodemon and Concurrently to run both the backend and the frontend simultaneously.

- **Run the server only:**

  ```bash
  npm run server
  ```

- **Run the client only:**

  ```bash
  npm run client
  ```

- **Data Seeding:**

  To import sample data into your database:

  ```bash
  npm run data:import
  ```

  To remove seeded data:

  ```bash
  npm run data:destroy
  ```

---

## Folder Structure

- **backend/**
  - `server.js` – Entry point for the Express server.
  - `config/` – Contains configuration files (e.g., database connection).
  - `models/` – Contains Mongoose models for Products, Users, and Orders.
  - `routes/` – Contains API route definitions.
  - `data/` – Contains sample data for seeding the database.
  
- **frontend/**
  - `public/` – Contains static files (HTML, manifest, robots.txt, etc.).
  - `src/`
    - `components/` – Reusable UI components (Header, Footer, Message, etc.).
    - `screens/` – Different page components (HomeScreen, ProductScreen, CartScreen, CheckoutScreen).
    - `assets/styles/` – Custom CSS files and Bootstrap customizations.
    - `store/` – Redux-related configurations.
    - `index.js` – Application entry point including router setup.

---

## Future Improvements

- **Enhanced User Authentication:** Integration with OAuth providers.
- **Payment Integration:** Secure payment processing using third-party services.
- **Order History:** Provide a detailed order history for users.
- **Admin Dashboard:** Improved UI for admin to manage products and orders.
- **Responsive Design Enhancements:** Further optimization for mobile and tablet devices.

---

## License

This project is licensed under the MIT License.

---

Happy coding!
