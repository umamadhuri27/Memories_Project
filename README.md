# Project Setup Guide

This guide will walk you through the necessary steps to get the application running correctly. It is crucial to follow these instructions carefully to avoid common errors.

## 1. Server Configuration (`.env` file)

The server requires a `.env` file for essential configuration, including the database connection string. Without this file, the server will fail to start.

**Action:**

1.  Create a new file named `.env` inside the `server/` directory.
2.  Add the following content to the file:

    ```
    CONNECTION_URL=<YOUR_MONGODB_CONNECTION_URL>
    JWT_SECRET=your_super_secret_key
    ```

    *   Replace `<YOUR_MONGODB_CONNECTION_URL>` with your actual MongoDB connection string.
    *   You can change `your_super_secret_key` to any long, random string for better security.

## 2. Google Sign-In Configuration

The error `[GSI_LOGGER]: The given origin is not allowed for the given client ID` means you need to authorize your development URLs in your Google Cloud project.

**Action:**

1.  **Open the Google Cloud Console:**
    *   Navigate to [https://console.cloud.google.com/](https://console.cloud.google.com/).

2.  **Select Your Project:**
    *   Ensure you have the correct project selected.

3.  **Go to the Credentials Page:**
    *   In the navigation menu (☰), go to **APIs & Services > Credentials**.

4.  **Edit Your Client ID:**
    *   Under **OAuth 2.0 Client IDs**, find and click the pencil icon (✏️) to edit your client ID.

5.  **Add Authorized URIs:**
    *   Under **Authorized JavaScript origins**, click **+ ADD URI**.
    *   Enter `http://localhost:3000`.
    *   Click **+ ADD URI** again.
    *   Enter `http://localhost:5000`.

6.  **Save** your changes. It may take a few minutes to apply.

## 3. Running the Application

Once the configuration is complete, you can install the dependencies and start the server.

**Action:**

1.  Navigate to the server directory:
    ```bash
    cd server
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Start the server:
    ```bash
    npm start
    ```

Following these three steps should resolve all the errors you are encountering.
