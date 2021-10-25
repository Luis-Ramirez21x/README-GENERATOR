const inquirer = require('inquirer');
const fs = require('fs');

var createREADME = project => {
    return ``
    
}

inquirer 
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Describe your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'installInstructions',
        },
        {
            type: 'input',
            message: 'Enter usage information',
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines',
            name: 'contributionGuidelines',
        },
        {
            type: 'input',
            message: 'Enter Test Intructions',
            name: 'testInstructions',
        },
        {
            type: 'input',
            message: 'Enter your github username',
            name: 'githubUserName',
        },
    ])