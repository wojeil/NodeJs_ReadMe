
// Require all npm packages and files
var inquirer = require("inquirer");
var fs = require('fs');
var api = require("./utils/api.js");
var generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
  {
    type: "input",
    message: "What is your UserName?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What kind of installations did you use?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is your usage?",
    name: "usage",
  },
  {
    type: "input",
    message: "Which license are you using?",
    name: "license",
  },
  {
    type: "input",
    message: "Who is contributing to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How do you run tests",
    name: "test",
  },
// questions to user using "enquirer"
];
inquirer
  .prompt(questions)
  .then(data => {
    
  
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
function init() {

// Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it.

}

init();
