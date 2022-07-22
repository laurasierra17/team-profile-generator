// Constructors for the types of employees
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Modules used to prompt questions to users
const inquirer = require('inquirer');

// Array storing the user's inputs
let teamInfo = [];

// Questionnaire for each type of employee
const managerQuestions = require('./dist/managerQuestions');
const engineerQuestions = require('./dist/engineerQuestions');
const internQuestions = require('./dist/internQuestions');

// Function to generate intern questions
function intern() {
    inquirer.prompt(internQuestions).then(answers => {
        // teamInfo = [{ member: "engineer", ...answers}];
        console.log("intern: ", answers)
        // Ask user what next member to add
        nextMember();
    })
}

// Function to generate engineer questions
function engineer() {
    inquirer.prompt(engineerQuestions).then(answers => {
        teamInfo = [...teamInfo, { member: "engineer", ...answers}];
        // Ask user what next member to add
        nextMember();
    })
}

// Function to generate manager questions
function manager() {
    inquirer.prompt(managerQuestions).then(answers => {
        teamInfo.push({ member: "manager", ...answers });
        // Ask user what next member to add
        nextMember();
    })
}

// Function to ask user manager questions or which member to pick next
function nextMember() {
    // Called after the manager info has been filled out and when called by other functions
    inquirer.prompt(
        {
            type: "list",
            name: "next",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }).then(answers => {
            switch (answers.next) {
                case 'Engineer':
                    engineer();
                    break;
                case 'Intern':
                    intern();
                    break;
                default:
                    return;
            }
        })
}


    // depending on user selection, we'll call a function with the questions of the employee that the user selected

    // 4. re ask question 2 when those questions are done
    // 5. repeat until user selects none

// Function call to initialize app
manager();