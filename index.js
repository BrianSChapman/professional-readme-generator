const { default: inquirer } = require("inquirer");
const fs = require("fs");

const questions = [

  inquirer.prompt([
  {
    type: "input",
    message:"Hello! Please input your first and last name.",
    name: "name",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What's your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions",
    name: "installation",
    default: "none",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide guidelines for how others can contribute to your project",
    name: "contribute",
  },
  {
    type: "input",
    message: "Write tests for your application and provide details on how to run them here.",
    name: "testing",
    default:"none",
  },
  {
    type: "list",
    message: "Select your license below (if any)",
    choices: ["Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense"],   
    default:"none",
  },
])

.then((answers) => {
    const fileName = `${answers.name.toLowerCase().split(' ').join('')}.json`;
  
    fs.writeFile(fileName, JSON.stringify(answers, null, '/t'), (err) =>
    err ? console.log(err) : console.log("Input received! Thank you.")
    );
})
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
