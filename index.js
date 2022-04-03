// init packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./src/generateHtml");

// init employee objects
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// init employees array
const team = [];

// functions for employees

// general employee
const genEmployee = () => {
    return inquirer
    .prompt([
        // choose list
        {
            type: "list",
            name: "chooseTeammember",
            message: "What team member would you like to add?",
            choices: ["Engineer", "Intern", "Completed my team!"]
        }

    ])
    .then(choices => {
        if (choices.chooseTeammember === "Engineer") {
            genEngineer();
        }
        else if (choices.chooseTeammember === "Intern") {
            genIntern();
        }
        else if (choices.chooseTeammember === "Completed my team!") {
            writeToFile("./dist/index.html", generateHtml(team));
        }
    })
}

// manager
const genManager = () => {
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

        // manager's email
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email? (Required)",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please provide an email address!");
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
                let isNum = /^\d+$/.test(managerIdInput);
                if (managerIdInput && isNum) {
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
                let isNum = /^\d+$/.test(managerOfficeInput);
                if (managerOfficeInput && isNum) {
                    return true;
                } else {
                    console.log("Please provide a valid phonn number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const createdManager = new Manager(
            managerInput.managerName,
            managerInput.managerEmail,
            managerInput.managerId,
            managerInput.managerOffice
        );
        team.push(createdManager);
        genEmployee();
    })
}

// engineer
const genEngineer = () => {
    return inquirer
    .prompt([
        // engineer's name
        {
            type: "input",
            name: "engName",
            message: "Please enter the engineer's name (Required)",
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },

        // manager's email
        {
            type: "input",
            name: "engEmail",
            message: "What is the engineer's email? (Required)",
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log("Please provide an email address!");
                    return false;
                }
            }
        },

        // engineer's id
        {
            type: "input",
            name: "engId",
            message: "What is the engineer's ID? (Required)",
            validate: engIdInput => {
                let isNum = /^\d+$/.test(engIdInput);
                if (engIdInput && isNum) {
                    return true;
                } else {
                    console.log("Please provide an ID that contains only numbers");
                    return false;
                }
            }
        },

        // engineer's github
        {
            type: "input",
            name: "engGithub",
            message: "What is the engineer's github accont? (Required)",
            validate: engGithubInput => {
                if (engGithubInput) {
                    return true;
                } else {
                    console.log("Please provide a github username!");
                    return false;
                }
            }
        }
    ])
    .then(engInput => {
        const createdEngineer = new Engineer(
            engInput.engName,
            engInput.engEmail,
            engInput.engId,
            engInput.engGithub
        );
        team.push(createdEngineer);
        genEmployee();
    })
}

// intern
const genIntern = () => {
    return inquirer
    .prompt([
        // intern's name
        {
            type: "input",
            name: "internName",
            message: "Please enter the intern's name (Required)",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },

        //intern's email
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email? (Required)",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please provide an email address!");
                    return false;
                }
            }
        },

        // intern's id
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID? (Required)",
            validate: internIdInput => {
                let isNum = /^\d+$/.test(internIdInput);
                if (internIdInput && isNum) {
                    return true;
                } else {
                    console.log("Please provide an ID that contains only numbers");
                    return false;
                }
            }
        },

        // intern's school
        {
            type: "input",
            name: "internSchool",
            message: "What school did the intern attend? (Required)",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please provide the name of the school!");
                    return false;
                }
            }
        }
    ])
    .then(internInput => {
        const createdIntern = new Intern(
            internInput.internName,
            internInput.internEmail,
            internInput.internId,
            internInput.internSchool
        );
        team.push(createdIntern);
        genEmployee();
    })
}

// create HTML
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Success! HTML generated!");
        }
    });
}

// init app
genManager();