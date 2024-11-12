# Food Management System

## Overview
The **Food Management System** is a web application designed to help manage and track food orders, including adding, searching, updating, and deleting orders. It is built using the **MERN stack** (MongoDB, Express, React, Node.js) with a simple RESTful API to handle requests from the frontend. The project provides a seamless way to manage orders for a food-related business, allowing users to easily interact with the system through a user-friendly interface.

## Features
- **Add Orders**: Users can add new food orders.
- **Search Orders**: Users can search for orders by order ID.
- **Update Orders**: Users can update existing orders (e.g., changing the quantity or food item).
- **Delete Orders**: Users can delete orders from the database.
- **View All Orders**: Users can view all orders in the database.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Routing**: React Router

## Project Setup

### 1. Clone the Repository
Clone this repository to your local machine to get started.

```bash
git clone https://github.com/yourusername/food-management-system.git
cd food-management-system
```

### 2. Install Dependencies

#### Backend (Server-side)

Navigate to the **backend** directory and install the dependencies.

```bash
cd backend
npm install
```

#### Frontend (Client-side)

Navigate to the **frontend** directory and install the dependencies.

```bash
cd frontend
npm install
```

### 3. Start the Application

#### Backend

In the **backend** directory, run the following command to start the backend server:

```bash
npm start
```

This will start the server on `http://localhost:5000`.

#### Frontend

In the **frontend** directory, run the following command to start the React development server:

```bash
npm start
```

This will start the frontend on `http://localhost:3000`.

### 4. Open the Application

Open your browser and visit `http://localhost:3000` to access the frontend.

## API Endpoints

### POST `/api/orders`
- **Description**: Adds a new order to the database.
- **Request Body**:
  ```json
  {
    "CustomerName": "John Doe",
    "Product": "Pizza",
    "Quantity": 2,
    "OrderDate": "2024-11-12"
  }
  ```
- **Response**: Returns the created order object.

### GET `/api/orders/:id`
- **Description**: Fetches the order by order ID.
- **Parameters**: `id` (Order ID)
- **Response**: Returns the order details if found, otherwise an error message.

### PATCH `/api/orders/:id`
- **Description**: Updates an existing order.
- **Parameters**: `id` (Order ID)
- **Request Body**:
  ```json
  {
    "CustomerName": "Jane Doe",
    "Product": "Burger",
    "Quantity": 3
  }
  ```
- **Response**: Returns the updated order object.

### DELETE `/api/orders/:id`
- **Description**: Deletes an order by order ID.
- **Parameters**: `id` (Order ID)
- **Response**: Returns a success message if the order was deleted.

### GET `/api/orders`
- **Description**: Fetches all orders in the database.
- **Response**: Returns a list of all orders.

## Frontend Components

- **AddOrder**: A form for adding new orders to the system.
- **SearchOrder**: A search interface for finding orders by order ID.
- **UpdateOrder**: A form for updating existing orders.
- **DeleteOrder**: An interface for deleting orders.


