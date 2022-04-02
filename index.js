// init packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./src/generateHtml.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// generate an arry for user prompts
const questions = () => {
    return inquirer
        .prompt([

            // manager's name
            {
                type: "input",
                name: "managerName",
                message: "Please enter the manager's name (Required)",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name");
                        return false;
                    }
                }
            },

            // manager's id
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID? (Required)",
                validate: managerIdInput => {
                    if (managerIdInput && managerIdInput.matches("[0-9]+")) {
                        return true;
                    } else {
                        console.log("Please provide an ID that contains only numbers");
                        return false;
                    }
                }
            },

            // manager's office number
            {
                type: "input",
                name: "managerOffice",
                message: "What is the manager's office number? (Required)",
                validate: managerOfficeInput => {
                    if (managerOfficeInput && managerOfficeInput.matches("[0-9]+")) {
                        return true;
                    } else {
                        console.log("Please provide a valid phonn number!");
                        return false;
                    }
                }
            },

            // manager's email
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email? (Required)",
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log("Please provide an email address !");
                        return false;
                    }
                }
            },

            // confirmTeammember
            {
                type: "confirm",
                name: "confirmTeammember",
                message: "Would you like to include a new team member?",
                default: true
            },

            // active when confirmTeammember returns true
            {
                type: "list",
                name: "chooseTeammember",
                message: "What team member would you like to add?",
                choices: ["Engineer", "Intern", "Completed my team!"]
            }
        ]);
}

function init() {
    questions()
    .then(data => {
        // write to html file function
    })
    .catch(err => {
        console.log(err);
    });
}

// init app
init();