# K-COM-web project Documentation

## Overview

This project is an eCommerce application built with **React** for the frontend and **Spring Boot** for the backend. The application is designed to handle textual data and media files using two different databases. The frontend will request data from the backend through specific API endpoints.

## Technologies Used

- **Frontend**: React
- **Backend**: Spring Boot
- **Databases**: 
  - Textual Data: MySQL
  - Media Files: Supabase

## Project Structure
```
/ecommerce-project
├── /frontend          # React application
│   ├── /src
│   ├── package.json
│   └── ...
└── /backend           # Spring Boot application
├── /src
├── pom.xml
└── ...
```


## API Endpoints

### Textual Data Endpoints

These endpoints are used for managing and retrieving textual data from the database.

- **Get All Products**
  - **Endpoint**: `GET /kcom/products`
  - **Description**: Retrieves a list of all products.
  - **Response**: 
    ```json
    [
      {
        "id": 1,
        "name": "Product Name",
        "description": "Product Description",
        "price": 100.00
      },
      ...
    ]
    ```

- **Get Product by ID**
  - **Endpoint**: `GET /kcom/products/{id}`
  - **Description**: Retrieves a product by its ID.
  - **Response**: 
    ```json
    {
      "id": 1,
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.00
    }
    ```

### Media Endpoints

These endpoints are used for handling media files (e.g., images, videos).

- **Upload Media**
  - **Endpoint**: `POST /kcom/media/upload`
  - **Description**: Uploads a media file to the database.
  - **Request Body**: Form-data with file.
  - **Response**: 
    ```json
    {
      "message": "Media uploaded successfully",
      "mediaUrl": "http://example.com/media/1"
    }
    ```

- **Get Media by Product ID**
  - **Endpoint**: `GET /kcom/media/products/{productId}`
  - **Description**: Retrieves media files associated with a specific product.
  - **Response**: 
    ```json
    [
      {
        "id": 1,
        "productId": 1,
        "mediaUrl": "http://example.com/media/1"
      },
      ...
    ]
    ```

## Database Setup

### Textual Data Database

1. **Database Type**: MySQL
2. **Connection String**: [Provide the connection string format]
3. **Tables**: 
   - Products
     - id (Primary Key)
     - name
     - description
     - price

### Media Database

1. **Database Type**: Supabase
2. **Connection String**: [Provide the connection string format]
3. **Collections**:
   - Media
     - id (Primary Key)
     - productId (Foreign Key)
     - mediaUrl

## Getting Started

### Prerequisites

- Java 11 or higher
- Node.js
- Required Database installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MarkpaulNduthu/K-COM-web.git

2. Navigate to the backend directory and install dependencies:
     ```bash
     cd ecommerce-project/backend
     mvn install
3. Navigate to the frontend directory and install dependencies:
   ```bash
    cd ../frontend
     npm install

   
## Running the Application

1. Start the backend server:
   ```bash
   cd ecommerce-project/backend
   mvn spring-boot:run
   
3. Start the frontend application:
   ```bash
   cd ecommerce-project/frontend
   npm start

  ```
 Contributions are welcome! Please open an issue or submit a pull request.
