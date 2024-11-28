# User Management System Backend

This is the backend for the User Management System. Follow the steps below to set up and run the project.

## Prerequisites

- XAMPP for MySQL database
- Node.js installed (to run the backend with npm)
- Git (for cloning the repository)

## Setup Steps

### Step 1: Set Up the Database

1. Open **XAMPP** and start the **Apache** and **MySQL** services.
2. Open **phpMyAdmin** by navigating to `http://localhost/phpmyadmin/`.
3. Create a new database called `user_management`:
    - In the **Databases** tab, enter `user_management` in the name field and click **Create**.
4. Import the `user_management.sql` file:
    - In the **Import** tab of phpMyAdmin, choose the `user_management.sql` file and click **Go** to import the database schema.

### Step 2: Set Up the Backend

1. Download or clone this repository.

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the `user_management_backend` folder inside the `xampp/htdocs/` directory.

    ```bash
    cd /path/to/xampp/htdocs/user_management_backend
    ```

3. Install the required dependencies.

    ```bash
    npm install
    ```

4. Set up the backend API by modifying the configuration files (if needed). Ensure that the backend is pointing to your local MySQL database (`localhost`), using the `user_management` database.

### Step 3: Run the Backend

1. Start the backend server:

    ```bash
    npm start
    ```

    This will start the backend API on your local machine. The default port is usually `3000` (or you can configure it to any port you prefer).

### Step 4: Frontend Setup (Optional)

If you have a frontend for this project, follow these steps to set it up:

1. Navigate to the frontend directory (if applicable).

    ```bash
    cd /path/to/frontend
    ```

2. Install the necessary frontend dependencies:

    ```bash
    npm install
    ```

3. Run the frontend:

    ```bash
    npm start
    ```

### Step 5: Push the Repository to Git

1. Initialize a Git repository if it is not already done:

    ```bash
    git init
    ```

2. Add your files to the Git index:

    ```bash
    git add .
    ```

3. Commit the changes:

    ```bash
    git commit -m "Initial commit"
    ```

4. Add the remote repository URL:

    ```bash
    git remote add origin <repository_url>
    ```

5. Push the changes to the remote repository:

    ```bash
    git push -u origin main
    ```

### Troubleshooting

- If you encounter issues with the database connection, ensure that your MySQL service is running in XAMPP and the database credentials in your backend configuration match those of the XAMPP MySQL instance.
- If you face any errors related to missing dependencies or packages, run `npm install` again to ensure everything is correctly set up.

## License

This project is licensed under the MIT License.
