// Constructors for the types of employees
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Modules used to prompt questions to users
const inquirer = require('inquirer');

// Questionnaire for each type of employee
const managerQuestions = require('./dist/managerQuestions');
const engineerQuestions = require('./dist/engineerQuestions');
const internQuestions = require('./dist/internQuestions');
