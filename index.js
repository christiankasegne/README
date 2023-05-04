// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require('path');
const generateMarkdown = require(`./utils/generateMarkdown.js`);
// TODO: Create an array of questions for user input
const questions = [
    {
        type:`input`,
        name:`title`,
        massage:`What is the name of your project?`,
    },
    {
        type:`input`,
        name:`description`,
        massage:`Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:`,
    },
    {
        type:`input`,
        name:`installation`,
        massage:`What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
    },
    {
        type:`input`,
        name:`usage`,
        massage:`Provide instructions and examples for use. Include screenshots as needed.`,
    },
    {
        type:`input`,
        name:` credits`,
        massage:`List your collaborators, if any.`,
    },
    {
        type:`list`,
        name:`license`,
        choices:[`Apache License 2.0`, `GNU General Public License v3.0`, `MIT License`, `BSD 2-Clause"Simplified" License`, `BSD 3-Clause "New" or "Revised" License`, `Boost Software License 1.0`, `Creative Commons Zero v1.0`, `Universal Eclipse Public License 2.0`, `GNU Affero General Public License v3.0`, `GNU General Public License v2.0`, `GNU Lesser General Public License v2.1`, `Mozilla Public License 2.0`, `The Unlicense`]
    },
    {
        type:`input`,
        name:`contribute`,
        massage:`Would like other developers to contribute to it, you can include guidelines for how to do so.`,
    },
    {
        type:`input`,
        name:`tests`,
        massage:`Write tests for your application. Then provide examples on how to run them here.`,
    },
    {
        type:`input`,
        name:`name`,
        massage:`what is your full name?`,
    },
    {
        type:`input`,
        name:`github`,
        massage:`what is your GitHub username?`,
    },
    {
        type:`input`,
        name:`email`,
        massage:`what is your email address?`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile(`./README/README-DEMO.md`, generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
