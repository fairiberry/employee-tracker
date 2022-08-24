INSERT INTO department (dept_name) VALUES
("Administration"),
("Marketing"),
("IT"),
("Accounting"),
("Human Resources"),
("Customer Service");

-- it's giving me issues to use the name "name" for a column name.... so it's dept_name instead --

INSERT INTO title (title, salary, department) VALUES
("CEO", 500000, "Administration"),
("Administrator", 300000, "Administration"),
("Sales Lead", 150000, "Marketing"),
("Sales Person", 50000, "Marketing"),
("Lead Developer", 150000, "IT"),
("Developer", 90000, "IT"),
("Accountant", 50000, "Accounting"),
("Lawyer", 75000, "Human Resources"),
("HR Coordinator", 50000, "Human Resources"),
("Customer Service", 25000, "Customer Service");

-- was getting issues using "role" as the table name, so it is title here instead. sorry :( --

-- I'm pulling names from this website because I'm not good at naming characters, https://www.name-generator.org.uk/quick/ --

INSERT INTO employee (first_name, last_name, title, department, salary) VALUES
("Sydney", "Guy", "CEO", "Administration", 500000),
("Harleigh", "Best", "Sales Lead", "Marketing", 150000),
("Briana", "Wise", "Sales Person", "Marketing", 50000),
("Jesse", "Crowther", "Sales Person", "Marketing", 50000),
("Brandon", "Mcleod", "Lead Developer", "IT", 150000),
("Kingston", "Dolan", "Developer", "IT", 90000),
("Benjamin", "Nash", "Developer", "IT", 90000),
("Naseem", "Mullins", "Accountant", "Accounting", 50000),
("Graham", "Sheridan", "Lawyer", "Human Resources", 75000),
("Anthony", "Drummond", "HR Coordinator", "Human Resources", 50000),
("Ethan", "Little", "Customer Service", "Customer Service", 25000),
("Bentley", "Newton", "Customer Service", "Customer Service", 25000),
("Melvin", "Andrews", "Customer Service", "Customer Service", 25000);