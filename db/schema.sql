DROP DATABASE IF EXISTS company_database;
CREATE DATABASE company_database;

USE company_database;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30),
    department INT,
    salary DECIMAL,
    FOREIGN KEY (department) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_manager
    FOREIGN KEY (manager_id)
    REFERENCES employee(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id)
    REFERENCES roles(id) ON DELETE SET NULL
);