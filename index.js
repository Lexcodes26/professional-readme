// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
  {
    //This is for the project name
    type: "input",
    name: "title",
    message: "What is the title of the project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You must enter a title to continue!");
        return false;
      }
    },
  },

  //This includes the description of the project
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You must provide a project description!");
        return false;
      }
    },
  },

  // Installation Instructions
  {
    type: "input",
    name: "installation",
    message: "How did you install your project?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log(" Please provide installation info to continue!");
        return false;
      }
    },
  },

  // Usage Information
  {
    type: "input",
    name: "usage",
    message: "How will you use this project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide information on how to use your project!");
        return false;
      }
    },
  },

  // Contribution Guidlines
  {
    type: "input",
    name: "contribution",
    message: "How should other developers contribute?",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "Please provide information on how to contribute to the project!"
        );
        return false;
      }
    },
  },

  // Test Instructions
  {
    type: "input",
    name: "testing",
    message: "How did you test this project?",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("You must describe how to test this project!");
        return false;
      }
    },
  },

  // License Options
  {
    type: "checkbox",
    name: "licensing",
    message: "Please select a license for your project",
    choices: [
      "Apache",
      "MIT",
      "Mozilla-Public",
      "GNU-General-Public",
      "Common-Development-and Distribution",
      "None",
    ],
    validate: (licensingInput) => {
      if (licensingInput) {
        return true;
      } else {
        console.log("Please pick a license for the project!");
        return false;
      }
    },
  },
  // Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Would you like to include your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Success! Data is now going to be transfered into the README!");
  });
}

// Function call to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
