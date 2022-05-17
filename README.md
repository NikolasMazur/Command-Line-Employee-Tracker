# Command Line Employee Tracker
This project was built with NodeJS, Inquirer, and mySQL to create a command line application made to keep track of a list of current employees. The application uses inquirer to build a basic interface for selecting functions to view, add, update, or delete database entries by connection functions to SQL queries.

## Installation
1. Install NodeJS
2. Install mySQL
3. Copy repository
4. Run `npm install`

## Usage
1. Go to `connection.js`
2. Change `root` to whatever user mySQL is installed to
3. Change `password` to whatever mySQL password is
4. Navigate to `db` directory in terminal
5. Run `mysql -u root -p` (replace `root` with mySQL installation location)
6. Type `SOURCE schema.sql;`
7. Type `SOURCE seeds.sql;`
8. Type `Exit`
9. Type `node index.js`
10. Select command from popdown
11. Follow prompts
12. Select `Exit` to close application when done

![](./assets/command-line-employee-tracker.gif)

## Questions
For additional information you can reach out at the GitHub account "NikolasMazur".

## To-do
As of right now the application is missing two components.
1. Fix addRole function