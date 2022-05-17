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
        { name: "Exit", value: exit },
      ],
    },
  ]);
  answer.menu();
};

start();