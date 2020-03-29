
// Require all npm packages and files
var inquirer = require("inquire");
var fs = require('fs');
var api = require("./utils/api.js");
var generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
// questions to user using "enquirer"
];
inquirer
  .prompt([
    
  ])
  .then(answers => {
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
