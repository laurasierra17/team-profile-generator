// Questionnaire related to engineers
const engineerQuestions = [
    {
        type: "input",
        name: "nameQ",
        message: "What is your engineer's name?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid name"
            }
            return true;
        }
    },
    {
        type: "input",
        name: "idQ",
        message: "What is your engineer's id?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid id"
            }
            return true;
        }
    },
    {
        type: "input",
        name: "emailQ",
        message: "What is your engineer's email?",
        // Validate user's email
        validate: (input) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(input)) {
                return "You have to provide a valid email address"
            }
            return true;
        }
    },
    {
        type: "input",
        name: "githubQ",
        message: "What is your engineer's GitHub username?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid GitHub username"
            }
            return true;
        }
    }
]

module.exports = engineerQuestions;