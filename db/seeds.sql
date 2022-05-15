INSERT INTO department(id, department_name)
VALUES (1, "Therapy Staff"),
       (2, "Information Technology"),
       (3, "Administration");

INSERT INTO roles(id, job_title, department, salary)
VALUES (1, "OTR/L", 1, 125830),
       (2, "PT", 1, 76181),
       (3, "DPT", 1,83121 ),
       (4, "IT", 2, 76379),
       (5, "Office Manager", 3, 56723);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Doe", 1, 1),
       (2, "Jane", "Doe", 2, 3),
       (3, "Liam", "Smith", 3, 3),
       (4, "Olivia", "Williams", 4, 5),
       (5, "Noah", "Baker", 5, 5);