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

// Close program
const exit = () => {
  console.log("Program closed.");
  process.exit(0);
};

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

start();