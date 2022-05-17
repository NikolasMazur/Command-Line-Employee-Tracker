const inquirer = require("inquirer");
require("console.table");
const db = require("./db/queries");

const start = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "Please select function to continue.",
      choices: [
        { name: "View departments", value: viewDepartments },
        { name: "View roles", value: viewRoles },
        { name: "View employees", value: viewEmployees },
        { name: "Add department", value: addDepartment },
        { name: "Add role (Work in progress)", value: addRole },
        { name: "Add employee", value: addEmployee },
        { name: "Update employee role", value: updateEmployeeRole },
        { name: "Update employee manager", value: updateManager },
        { name: "Delete department", value: deleteDepartment },
        { name: "Delete role", value: deleteRole },
        { name: "Delete employee", value: deleteEmployee },
        // Closes program
        { name: "Exit", value: exit },
      ],
    },
  ]);
  answer.menu();
};

// Utilities
// Close program
const exit = () => {
  console.log("Program closed.");
  process.exit(0);
};
// Checks if input is valid
function validateInput(value) {
  if (value) {
    return true;
  } else {
    console.log("\n Please enter a valid value");
    return false;
  }
}
// Map user choices
function mapChoices({ id, name }) {
  return { name, value: id };
}

// View functions
function viewDepartments() {
  db.findAllDepartments().then(([rows]) => {
    console.table(rows);
    return start();
  });
};

function viewEmployees() {
  db.findAllEmployees().then(([rows]) => {
    console.table(rows);
    return start();
  });
}

function viewRoles() {
  db.findAllRoles().then(([rows]) => {
    console.table(rows);
    return start();
  });
}

// Add function
const addDepartment = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the department name?",
      validate: validateInput,
    },
  ]);
  const departmentName = answer.name;
  db.addADepartment(departmentName).then(() => {
    db.findAllDepartments().then(([rows]) => {
      console.table(rows);
      return start();
    });
  });
};

// Currently non-functional
const addRole = async () => {
  const [rows] = await db.findAllDepartments();
  console.table(rows);
  const departmentChoices = rows.map(({ name, id }) => ({ name, value: id }));
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the role title?",
      validate: validateInput,
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for this role?",
      validate: validateInput,
    },
    {
      type: "list",
      name: "department",
      message: "Which department does this role belong to?",
      choices: departmentChoices,
    },
  ]);

  db.addARole(answer.name, answer.salary, answer.department).then(() => {
    db.findAllRoles().then(([rows]) => {
      console.table(rows);
      return start();
    });
  });
};

const addEmployee = async () => {
  const [rowsA] = await db.findAllRoles();
  console.table(rowsA);
  const roleChoices = rowsA.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  console.log(roleChoices);

  const [rowsB] = await db.findAllEmployees();
  const employeeChoices = rowsB.map(mapChoices);
  console.log(employeeChoices);

  const managerChoices = [...employeeChoices, { name: "Null" }];
  console.log(managerChoices);
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?",
      validate: validateInput,
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?",
      validate: validateInput,
    },
    {
      type: "list",
      name: "role_id",
      message: "What is this employee's role?",
      choices: roleChoices,
    },
    {
      type: "confirm",
      name: "manager",
      message: "Does this employee have a manager?",
      default: true,
    },
    {
      type: "list",
      name: "manager_id",
      when: function (answers) {
        return answers.manager === true;
      },
      message: "Who is this employee's manager?",
      choices: managerChoices,
    },
]);

delete answer.manager;
  console.log(answer);
  db.addAnEmployee(answer).then(() => {
    db.findAllEmployees().then(([rows]) => {
      console.table(rows);
      return start();
    });
  });
};

// Drop fucntion
const deleteDepartment = async () => {
  const [allDepartments] = await db.findAllDepartments();
  console.table(allDepartments);
  const departmentChoices = allDepartments.map(({ id, department_name }) => ({
    name: department_name,
    value: id,
  }));
  console.table(departmentChoices);
  const { department } = await inquirer.prompt([
    {
      type: "list",
      name: "department",
      message: "Which department do you want to delete?",
      choices: departmentChoices,
    },
  ]);

  db.dropDepartment(department).then(() => {
    db.findAllDepartments().then(([rows]) => {
      console.table(rows);
      return start();
    });
  });
};

const deleteRole = async () => {
  const [rowsA] = await db.findAllRoles();
  console.table(rowsA);
  const roleChoices = rowsA.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  console.log(roleChoices);
  const response = await inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which role do you want to delete?",
        choices: roleChoices,
      },
    ])
    .then((response) => {
      db.dropRole(response.role);
        db.findAllRoles().then(([rows]) => {
            console.table(rows);
            return start();
        });
    });
};

const deleteEmployee = async () => {
  const [rowsA] = await db.findAllEmployees();
  console.table(rowsA);
  const employeeChoices = rowsA.map(({ id, name }) => ({ name,
    value: id,
  }));
  console.table(employeeChoices);
  const response = await inquirer.prompt([
    {
      type: "list",
      name: "employee",
      message: "Which employee do you want to delete?",
      choices: employeeChoices,
    },
  ])
  .then((response) => {
    db.dropEmployee(response.employee);
      db.findAllEmployees().then(([rows]) => {
          console.table(rows);
          return start();
      });
  });
};
start();