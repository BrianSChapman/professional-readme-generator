// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [

  inquirer.prompt([
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  
    type: "input",
    message: "Provide a short description of your project",
    name: "description",

    type: "confirm",
    message: "do you require a table of contents?",
    name: "confirmTable",
    default: "false",

    type: "input",
    message: "Enter a Table of Contents, please.",
    name: "tableOfContents",

    
    
  })
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
