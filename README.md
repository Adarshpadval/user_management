# User Management System Installation Guide

This guide will help you set up and run the User Management System project. Follow the steps below to get started.

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **XAMPP** (for MySQL database)
- **Node.js** (for running the backend with npm)
- **Git** (for cloning the repository)

## Setup Steps

### Step 1: Set Up the Database

1. **Start XAMPP** and make sure the **Apache** and **MySQL** services are running.
2. Open **phpMyAdmin** by navigating to `http://localhost/phpmyadmin/`.
3. Create a new database named `user_management`:
    - Go to the **Databases** tab, type `user_management` in the name field, and click **Create**.
4. **Import the database schema**:
    - In phpMyAdmin, go to the **Import** tab, choose the `user_management.sql` file, and click **Go** to import the database schema.

### Step 2: Set Up the Backend

1. **Clone the repository** or download the project files.

    ```bash
    git clone https://github.com/Adarshpadval/user_management.git
    ```

2. Navigate to the `user_management_backend` folder inside the `xampp/htdocs/` directory.

    ```bash
    cd /path/to/xampp/htdocs/user_management_backend
    ```

3. **Install the backend dependencies**:

    ```bash
    npm install
    ```

4. **Configure the backend**:
    - Modify any configuration files (e.g., database connection settings) to point to your local MySQL database (`localhost`) using the `user_management` database.

### Step 3: Run the Backend

1. Start the backend server:

    ```bash
    npm start
    ```

    This will start the backend API on your local machine. The default port is usually `3000`, but you can configure it to any port of your choice.

### Step 4: Set Up the Frontend

1. Navigate to the frontend directory:

    ```bash
    cd /path/to/user_management
    ```

2. **Install frontend dependencies**:

    ```bash
    npm install
    ```

3. **Run the frontend**:

    ```bash
    npm start
    ```

    This will start the frontend React app, typically accessible at `http://localhost:3000`.

### Troubleshooting

- **Database Connection Issues**: If you encounter issues with the database connection, ensure that your MySQL service is running in XAMPP and that the backend configuration matches your XAMPP MySQL instance credentials.
  
- **Missing Dependencies**: If you run into errors related to missing dependencies or packages, simply run `npm install` again to make sure everything is installed correctly.

---

Feel free to contact us if you face any issues during the setup process!

