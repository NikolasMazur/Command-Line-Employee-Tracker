use company_database;

INSERT INTO department(department_name)
VALUES ("Therapy Staff"),
       ("Information Technology"),
       ("Administration");

INSERT INTO roles(job_title, department, salary)
VALUES ("OTR/L", 1, 125830),
       ("PT", 1, 76181),
       ("DPT", 1,83121 ),
       ("IT", 2, 76379),
       ("Office Manager", 3, 56723);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
       ("Jane", "Doe", 2, NULL),
       ("Liam", "Smith", 3, NULL),
       ("Olivia", "Williams", 4, NULL),
       ("Noah", "Baker", 5, NULL);