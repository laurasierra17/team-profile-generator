// Constructors for the types of employees
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');

// Modules used to prompt questions to users
const inquirer = require('inquirer');

// Questionnaire for each type of employee
const managerQuestions = require('./dist/managerQuestions');
const engineerQuestions = require('./dist/engineerQuestions');
const internQuestions = require('./dist/internQuestions');

// Generate HTML markup
const generateTemplate = require('./src/template');

// Array storing the user's inputs
let teamInfo = [];

// Function to generate intern questions
function intern() {
    inquirer.prompt(internQuestions).then(answers => {
        // Instantiates a new Intern obj and adds it to our array
        const intern = new Intern(answers.nameQ, answers.idQ, answers.emailQ, answers.schoolQ)
        teamInfo = [...teamInfo, intern];
        // Ask user what next member to add
        nextMember();
    })
}

// Function to generate engineer questions
function engineer() {
    inquirer.prompt(engineerQuestions).then(answers => {
        // Instantiates a new Engineer obj and adds it to our array
        const engineer = new Engineer(answers.nameQ, answers.idQ, answers.emailQ, answers.githubQ);
        teamInfo = [...teamInfo, engineer];
        // Ask user what next member to add
        nextMember();
    })
}

// Function to generate manager questions
function manager() {
    inquirer.prompt(managerQuestions).then(answers => {
        // Instantiates a new Manager obj and adds it to our array
        const manager = new Manager(answers.nameQ, answers.idQ, answers.emailQ, answers.officeQ);
        teamInfo.push(manager);
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
                    // Generate markup with user input
                    generateTemplate(teamInfo)
                    return;
            }
        })
}

// Function call to initialize app
manager();