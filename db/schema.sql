DROP DATABASE IF EXISTS company_database;
CREATE DATABASE company_database;

USE company_database;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(60) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(60) NOT NULL,
    role_id INT NOT NULL,
    department_id INT NOT NULL,
    salary DECIMAL NOT NULL
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);