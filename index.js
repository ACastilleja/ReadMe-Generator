const inquirer = require('inquirer');
const generatePage = require('./src/Readme-template');
const { writeFile} = require('./src/generate-site');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username? (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'project',
      message: 'Enter your Projects Name? (Required)',
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter your Projects name!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your Email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project: (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a short description!');
            return false;
          }
        }
      }, 
      {
       type: 'list',
       name: 'license',
       message: 'What Kind of license should your project have?',
       choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']   
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter a command to install!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test?',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter a command to run test!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'using',
        message: 'What does the user need to know about using the repo?',
        validate: usingInput => {
          if (usingInput) {
            return true;
          } else {
            console.log('Please enter a short description about using repo!');
            return false;
          }
        }
      }, 
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to repo?',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter a short description about contributing!');
            return false;
          }
        }
      },   
    
  ]);
};



promptUser()
  //.then(promptProject)
  //.then(portfolioData => {
  //  return generatePage(portfolioData);
 // })
 // .then(pageHTML => {
 //   return writeFile(pageHTML);
//  })
 // .then(writeFileResponse => {
 //   console.log(writeFileResponse);
 //   return copyFile();
 // })
 // .then(copyFileResponse => {
 //   console.log(copyFileResponse);
//  })
 // .catch(err => {
 //   console.log(err);
 // });

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();