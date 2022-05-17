const connection = require("../config/connection");

class db {
  constructor(connection) {
    this.connection = connection;
};

//   Find queries
findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
};
findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT roles.id, roles.job_title, roles.salary, department.department_name AS department FROM roles LEFT JOIN department ON roles.department = department.id"
      );
};
findAllEmployees() {
    return this.connection.promise()
    .query(`SELECT
    employee.id, CONCAT(employee.first_name, ' ' , employee.last_name) AS name, roles.job_title, department.department_name AS department, roles.salary, CONCAT(manager.first_name, ' ' , manager.last_name) AS manager
    FROM
    employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id`);
};
// Add functions
addADepartment(departmentName) {
  return this.connection
    .promise()
    .query("INSERT INTO department (department_name) VALUES (?)",
    [departmentName]
    );
};
// Non functional
addARole(roleTitle, roleSalary, roleDepartmentId) {
  return this.connection
    .promise()
    .query(
      "INSERT INTO roles (title, salary, department) VALUES (?, ?, ?)",
      [roleTitle, roleSalary, roleDepartmentId]
    );
};
addAnEmployee(answer) {
  return this.connection
    .promise()
    .query("INSERT INTO employee SET ?", answer);
};

};

module.exports = new db(connection);