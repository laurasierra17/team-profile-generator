const managerQuestions = [
    {
        type: "input",
        name: "nameQ",
        message: "What is the team manager's name?",
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
        message: "What is the team manager's id?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid ID"
            }
            return true;
        }
    },
    {
        type: "input",
        name: "emailQ",
        message: "What is the team manager's email?",
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
        name: "officeQ",
        message: "What is the team manager's office number?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid office number"
            }
            return true;
        }
    }
]

module.exports = managerQuestions;