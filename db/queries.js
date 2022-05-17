const connection = require("../config/connection");

class db {
  constructor(connection) {
    this.connection = connection;
};

//   Find functions
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
};

module.exports = new db(connection);