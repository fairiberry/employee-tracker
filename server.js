const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'fairiberry',
      database: 'employeelist'
    },
    console.log(""),
    console.log(""),
    console.log("┌─────────────── •✧✧• ───────────────┐"),
    console.log(" - WELCOME TO THE EMPLOYEE TRACKER! - "),
    console.log("└─────────────── •✧✧• ───────────────┘"),
    console.log(""),
    console.log(""),
);

const employeetracker = {
        type: "list",
        name: "first",
        message: "Choose One of the Following Options:",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role", "Quit"]
    };

const addDepartment = {
    type: "input",
    name: "department",
    message: "Input New Department Name"
};

const addRole = [
    {
        type: "input",
        name: "title",
        message: "Input New Role"
    },
    {
        type: "input",
        name: "salary",
        message: "Input Base Salary for New Role"        
    },
    {
        type: "list",
        name: "department",
        message: "Choose Department for New Role:",
        choices: ["Administration", "Marketing", "IT", "Accounting", "Human Resources", "Customer Service"]
    }
];

const addEmployee = [
    {
        type: "input",
        name: "first_name",
        message: "Input Employee's First Name"
    },
    {
        type: "input",
        name: "last_name",
        message: "Input Employee's Last Name"
    },
    {
        type: "list",
        name: "department",
        message: "Choose Employee's Department:",
        choices: ["Administration", "Marketing", "IT", "Accounting", "Human Resources", "Customer Service"]
    }
];

const getEmployeeName = [
    {
        type: "input",
        name: "first_name",
        message: "Input Employee's First Name"
    },
    {
        type: "input",
        name: "last_name",
        message: "Input Employee's Last Name"
    },
    {
        type: "list",
        name: "title",
        message: "Choose Employee's New Role:",
        choices: ["Administrator", "Sales Lead", "Sales Person", "Lead Developer", "Developer", "Accountant", "Lawyer", "HR Coordinator", "Customer Service"]
    }
]

const marketing = {
    type: "list",
    name: "title",
    message: "Choose Employee's Title:",
    choices: ["Sales Lead", "Sales Person"]
};

const iT = {
    type: "list",
    name: "title",
    message: "Choose Employee's Title:",
    choices: ["Lead Developer", "Developer"]
};

const humanResources = {
    type: "list",
    name: "title",
    message: "Choose Employee's Title",
    choices: ["Lawyer", "HR Coordinator"]
};

init();
    

function init() {
    inquirer.prompt(employeetracker).then((response) => {
        switch (response.first) {
            case "View All Departments":
                viewAllDepartments();
                setTimeout(() => { init(); }, 1000);
                break;
            case "View All Roles":
                viewAllRoles()
                setTimeout(() => { init(); }, 1000);
                break;
            case "View All Employees":
                viewAllEmployees();
                setTimeout(() => { init(); }, 1000);
                break;
            case "Add an Employee":
                moreEmployeeInfo();
                break;
            case "Add a Role":
                addTitle();
                break;
            case "Add a Department":
                addDept();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            case "Quit":
                console.log("");
                console.log("");
                console.log("┌─────── •✧✧• ───────┐");
                console.log(" - HAVE A GOOD DAY! - ");
                console.log("└─────── •✧✧• ───────┘");
                console.log("");
                console.log("");
                console.log("~ctrl + c to quit~");
            }
        }
    )
};

function addTitle() {
    inquirer.prompt(addRole).then((response) => {
        db.query("INSERT INTO title (title, salary, department) VALUES (?, ?, ?)", [
            response.title,
            response.salary,
            response.department,
        ], function () {
            console.log("");
            console.log("");
            console.log("┌─────────── •✧✧• ───────────┐");
            console.log(" - ROLE ADDED SUCCESSFULLY! - ");
            console.log("└─────────── •✧✧• ───────────┘");
            console.log("");
            console.log("");   
        }
        );
        setTimeout(() => { init(); }, 1000);
    }
    )
};

function addDept() {
    inquirer.prompt(addDepartment).then((response) => {
        db.query("INSERT INTO department (dept_name) VALUES (?)", [
            response.department,
        ], function () {
            console.log("");
            console.log("");
            console.log("┌───────────── •✧✧• ─────────────┐");
            console.log(" - DEPARTMENT ADDED SUCCESSFULLY! - ");
            console.log("└───────────── •✧✧• ─────────────┘");
            console.log("");
            console.log("");   
        }
        );
        setTimeout(() => { init(); }, 1000);
    }
    )
};

function moreEmployeeInfo() {
    inquirer.prompt(addEmployee).then((response) => {
        switch (response.department) {
            case "Administration":
                db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                    response.first_name,
                    response.last_name,
                    "Administrator",
                    response.department,
                    "300000",
                ], function () {
                    console.log("");
                    console.log("");
                    console.log("┌───────────── •✧✧• ─────────────┐");
                    console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                    console.log("└───────────── •✧✧• ─────────────┘");
                    console.log("");
                    console.log("");                        
                }
                );
                setTimeout(() => { init(); }, 1000);               
                break;
            case "Marketing":
                inquirer.prompt(marketing).then((response) => {
                    switch (response.title) {
                        case "Sales Lead":
                            db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                                response.first_name,
                                response.last_name,
                                "Sales Lead",
                                response.department,
                                "150000",
                            ], function () {
                                console.log("");
                                console.log("");
                                console.log("┌───────────── •✧✧• ─────────────┐");
                                console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                                console.log("└───────────── •✧✧• ─────────────┘");
                                console.log("");
                                console.log("");                                   
                            }
                            );
                            setTimeout(() => { init(); }, 1000);               
                            break;
                        case "Sales Person":
                            db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                                response.first_name,
                                response.last_name,
                                "Sales Person",
                                response.department,
                                "50000",
                            ], function () {
                                console.log("");
                                console.log("");
                                console.log("┌───────────── •✧✧• ─────────────┐");
                                console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                                console.log("└───────────── •✧✧• ─────────────┘");
                                console.log("");
                                console.log("");
                            }
                            );
                            setTimeout(() => { init(); }, 1000);               
                            break;                        
                    }
                }
                );
            case "IT":
                inquirer.prompt(iT).then((response) => {
                    switch (response.title) {
                        case "Lead Developer":
                            db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                                response.first_name,
                                response.last_name,
                                "Lead Developer",
                                response.department,
                                "150000",
                            ], function () {
                                console.log("");
                                console.log("");
                                console.log("┌───────────── •✧✧• ─────────────┐");
                                console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                                console.log("└───────────── •✧✧• ─────────────┘");
                                console.log("");
                                console.log("");
                            }
                            );
                            setTimeout(() => { init(); }, 1000);               
                            break;
                        case "Developer":
                            db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                                response.first_name,
                                response.last_name,
                                "Developer",
                                response.department,
                                "90000",
                            ], function () {
                                console.log("");
                                console.log("");
                                console.log("┌───────────── •✧✧• ─────────────┐");
                                console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                                console.log("└───────────── •✧✧• ─────────────┘");
                                console.log("");
                                console.log("");
                            }
                            );
                            setTimeout(() => { init(); }, 1000);               
                            break;
                    }
                }
                );
            case "Accounting":
                db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                    response.first_name,
                    response.last_name,
                    "Accountant",
                    response.department,
                    "50000",
                ], function () {
                    console.log("");
                    console.log("");
                    console.log("┌───────────── •✧✧• ─────────────┐");
                    console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                    console.log("└───────────── •✧✧• ─────────────┘");
                    console.log("");
                    console.log("");                        
                }
                );
                setTimeout(() => { init(); }, 1000);               
                break;
            case "Human Resources":
                inquirer.prompt(humanResources).then((response) => {
                    switch (response.title) {
                        case "Lawyer":
                            db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                                response.first_name,
                                response.last_name,
                                "Lawyer",
                                response.department,
                                "75000",
                            ], function () {
                                console.log("");
                                console.log("");
                                console.log("┌───────────── •✧✧• ─────────────┐");
                                console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                                console.log("└───────────── •✧✧• ─────────────┘");
                                console.log("");
                                console.log("");
                            }
                            );
                            setTimeout(() => { init(); }, 1000);               
                            break;
                        case "HR Coordinator":
                            db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                                response.first_name,
                                response.last_name,
                                "HR Coordinator",
                                response.department,
                                "50000",
                            ], function () {
                                console.log("");
                                console.log("");
                                console.log("┌───────────── •✧✧• ─────────────┐");
                                console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                                console.log("└───────────── •✧✧• ─────────────┘");
                                console.log("");
                                console.log("");
                            }
                            );
                            setTimeout(() => { init(); }, 1000);               
                            break;
                    }
                }
                );
            case "Customer Service":
                db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                    response.first_name,
                    response.last_name,
                    "Customer Service",
                    response.department,
                    "25000",
                ], function () {
                    console.log("");
                    console.log("");
                    console.log("┌───────────── •✧✧• ─────────────┐");
                    console.log(" - EMPLOYEE ADDED SUCCESSFULLY! - ");
                    console.log("└───────────── •✧✧• ─────────────┘");
                    console.log("");
                    console.log("");                        
                }
                );
                setTimeout(() => { init(); }, 1000);               
                break;
            }
        }
    )
};

function viewAllDepartments() {
    db.query("SELECT * FROM department", function (err, results) {
        console.table(results);
    });
};

function viewAllRoles() {
    db.query("SELECT title.id, title.title, title.salary, department.dept_name FROM title INNER JOIN department ON title.department = department.dept_name;", function (err, results) {
        console.table(results);
    })
};

function viewAllEmployees(){
    db.query("SELECT employee.id, employee.first_name, employee.last_name, title.title, department.dept_name, title.salary FROM employee INNER JOIN department ON employee.department = department.dept_name INNER JOIN title ON employee.title = title.title AND employee.salary = title.salary;", function (err, results) {
        console.table(results);
    })
};

function updateEmployee(){
    inquirer.prompt(getEmployeeName).then((response) => {
        db.query("UPDATE employee SET title = ? WHERE first_name = ? AND last_name = ?", [
            response.title,
            response.first_name,
            response.last_name,
        ], function () {
            console.log("");
            console.log("");
            console.log("┌──────────── •✧✧• ────────────┐");
            console.log(" - ROLE CHANGED SUCCESSFULLY! - ");
            console.log("└──────────── •✧✧• ────────────┘");
            console.log("");
            console.log("");   
        }
        );
        setTimeout(() => { init(); }, 1000);
    }
    )
};

"SELECT first_name, last_name, title FROM employee WHERE first_name = ? AND last_name = ?"