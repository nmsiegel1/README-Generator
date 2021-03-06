// load required modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./src/page-template.js");


const init = () => {
// questions asked by inquierer
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "project",
            message: "What is your project name?",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description for your project.",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please add a description of your project.');
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "liscense",
            message: "What type of liscense should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
            type: "input",
            name: "install",
            message: "What type of command should be run to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "tests",
            message: "What type of command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "input",
            name: "tips",
            message: "How do you use this repo?",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('How do you use this project?');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributions",
            message: "What does the user need to know about contributing to the repo?"
        },
        {
            type: "input",
            name: "credits",
            message: "Who contributed to this project?",
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Who created this project?');
                    return false;
                }
            }
        }
    ]).then(answers => {
// shows the users the answers in the terminal
        console.log(answers)
// sends data to the template to prepare the file
        const pageMarkdown = generateMarkdown(answers)

// writes the README.md file
        fs.writeFile("./dist/README.md", pageMarkdown, err => {
            if (err) throw err;
            console.log("README complete! Check out README.md to see the output!");
        });
    });
}

// Function call to initialize app
init()


