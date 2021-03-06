
// Require all npm packages and files
var inquirer = require("inquirer");
var fs = require('fs');
const axios = require('axios').default;
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
    type: "rawlist",
    message: "Which license are you using?",
    choices: ["APACHE2.0", "GPL3.0", "BSD3", "MIT",],
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

function init() {

  inquirer
    //all questions and answers above are in prompt below
    .prompt(questions)
    .then(function (results) {
      //axios call
      axios.get("https://api.github.com/users/" + results.username)
        .then(function (res) {
          //log to make sure you get results
          console.log(res.data);
          console.log(res.data.login);
          //adding my properties to my inquirer object
          results.html_url = res.data.html_url
          results.avatar = res.data.avatar_url
          //confirmed all worked 
          //grab files and write and append on read me


          fs.writeFile("myReadme.md", generateMarkdown(results), function (error) {
            if (error) {
              return console.log(error);
            }
            return console.log("success");
          });


        }).catch(function (error) {
          // handle error
          console.log(error);
        })

    })

}

init();
