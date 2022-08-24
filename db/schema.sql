DROP DATABASE IF EXISTS employeelist;
CREATE DATABASE employeelist;

USE employeelist;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE title (
    id INT AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    department VARCHAR(30) NOT NULL, -- department table --
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(50) NOT NULL, -- title table -- 
    department VARCHAR(30) NOT NULL, -- department table --
    salary DECIMAL NOT NULL, -- title table --
    PRIMARY KEY (id)
)


