-- Create database if not exists
CREATE DATABASE IF NOT EXISTS gotit;

-- Use the created database
USE gotit;

-- Create the 'users' table if not exists
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    phone VARCHAR(50),
    count INT
);

-- Insert sample data into the 'users' table
INSERT INTO users (name, phone, count) VALUES ('John Doe', '1234567890', 42);

-- Select data from the 'users' table (for verification purposes)
-- SELECT * FROM users;



