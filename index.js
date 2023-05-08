// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: `input`,
    name: `title`,
    message: `What is the name of your project?`,
  },
  {
    type: `input`,
    name: `Description`,
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:`,
  },
  {
    type: `input`,
    name: `installation`,
    message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
  },
  {
    type:`input`,
    name:`usage`,
    message:`Provide instructions how to use`,
  },
  {
    type: `input`,
    name: `credits`,
    message: `List your collaborators, if any.`,
  },
  {
    type: `list`,
    name: `License`,
    choices: [
      `Apache License 2.0`,
      `GNU General Public License v3.0`,
      `MIT License`,
      `BSD 2-Clause"Simplified" License`,
      `BSD 3-Clause "New" or "Revised" License`,
      `Boost Software License 1.0`,
      `Creative Commons Zero v1.0`,
      `Universal Eclipse Public License 2.0`,
      `GNU Affero General Public License v3.0`,
      `GNU General Public License v2.0`,
      `GNU Lesser General Public License v2.1`,
      `Mozilla Public License 2.0`,
      `The Unlicense`,
    ],
  },
  {
    type: `input`,
    name: `contribute`,
    message: `Would like other developers to contribute to it, you can include guidelines for how to do so.`,
  },
  {
    type: `input`,
    name: `tests`,
    message: `Write tests for your application. Then provide examples on how to run them here.`,
  },
  {
    type: `input`,
    name: `name`,
    message: `what is your full name?`,
  },
  {
    type: `input`,
    name: `github`,
    message: `what is your GitHub username?`,
  },
  {
    type: `input`,
    name: `email`,
    message: `what is your email address?`,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(`Creating README.md File...`);
    
    writeToFile(
      `./demo/README.md`,
      generateMarkdown({ ...responses })
    );
  });
}

// Function call to initialize app
init();
