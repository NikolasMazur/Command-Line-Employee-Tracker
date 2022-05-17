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

// Drop functions
dropDepartment(departmentId) {
  return this.connection.promise().query("DELETE FROM department WHERE id = ?", [departmentId]);
};
dropRole(roleId) {
  console.log("roleId: ", roleId)
  return this.connection.promise().query("DELETE FROM roles WHERE id = ?", [roleId]); 
};
dropEmployee(employeeId) {
  return this.connection.promise().query("DELETE FROM employee WHERE id = ?", [employeeId]);
}

// Update functions
updateAnEmployeeRole(roleId, employeeId) {
  return this.connection
    .promise()
    .query("UPDATE employee SET role_id = ? WHERE id = ?", [
      roleId,
      employeeId,
    ]);
}

updateAnEmployeeManager(managerId, employeeId) {
  return this.connection
    .promise()
    .query("UPDATE employee SET employee.manager_id = ? WHERE id = ?", [managerId, employeeId]);
};
findAllManagers(employeeId) {
    return this.connection.promise().query("SELECT * FROM employee WHERE id != ?", [employeeId]);
}};

module.exports = new db(connection);