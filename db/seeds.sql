INSERT INTO department(department_name)
VALUES ("Therapy Staff") --Replace "Therapy Staff" with desired department
       ("Information Technology") --Replace "Information Technology" with desired department
       ("Administration") --Replace "Administration" with desired department

INSERT INTO roles(job_title, department_id, salary)
VALUES ("OTR/L", 1, 125830) --Replace "OTR/L" with desired role, 1 with desired ID, 125830 with desired salary.
       ("PT", 1, 76181) --Replace "PT" with desired role, 1 with desired ID, 76181 with desired salary.
       ("DPT", 1,83121 ) --Replace "DPT" with desired role, 1 with desired ID, 83121 with desired salary.
       ("IT", 2, 76379) --Replace "IT" with desired role, 1 with desired ID, 76379 with desired salary.
       ("Office Manager", 3, 56723) --Replace "Office Manager" with desired role, 1 with desired ID, 56723 with desired salary.

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 1) --Replace "John" with desired first name, "Doe" with desired last name, "1" with desired role ID, "1" with desired manager ID
       ("Jane", "Doe", 2, 3) --Replace "Jane" with desired first name, "Doe" with desired last name, "2" with desired role ID, "3" with desired manager ID
       ("Liam", "Smith", 3, 3) --Replace "Liam" with desired first name, "Smith" with desired last name, "3" with desired role ID, "3" with desired manager ID
       ("Olivia", "Williams", 4, 5) --Replace "Olivia" with desired first name, "Williams" with desired last name, "4" with desired role ID, "5" with desired manager ID
       ("Noah", "Baker", 5, 5) --Replace "Noah" with desired first name, "Baker" with desired last name, "5" with desired role ID, "5" with desired manager ID