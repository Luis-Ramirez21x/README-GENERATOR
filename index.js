const inquirer = require('inquirer');
const fs = require('fs');

var createREADME = project => {
    return `# README-GENERATOR
# ${project.name}
    
## Project Description
#### ${project.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* Contributing
* Tests
* Questions
* License
    
## Installation 
#### ${project.installInstructions}
    
## Usage 
#### ${project.usageInfo}
    
## Contributing
#### ${project.contributionGuidelines}
    
## Tests
#### ${project.testInstructions}
    
## Questions
#### http://github.com/${project.githubUserName}
#### Please email me at ${project.email} for an additional questions.
    
## License
    `
    
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
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email',
        }
    ])
    .then((response) => 
        createREADME(response)
    )
    .then((response) => 
    fs.writeFile('README.md', response, (error, data) =>
    error ? console.error(error) : console.log(data))
    );