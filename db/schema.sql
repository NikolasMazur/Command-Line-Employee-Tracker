DROP DATABASE IF EXISTS company_database;
CREATE DATABASE company_database;

USE company_database;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(60) NOT NULL
);