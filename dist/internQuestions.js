const internQuestions = [
    {
        type: "input",
        name: "nameQ",
        message: "What is your intern's name?",
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
        message: "What is your intern's id?",
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
        message: "What is your intern's email?",
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
        name: "schoolQ",
        message: "What is your intern's school?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid school"
            }
            return true;
        }
    }
]

module.exports = internQuestions;