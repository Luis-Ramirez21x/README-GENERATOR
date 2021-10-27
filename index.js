const inquirer = require('inquirer');
const fs = require('fs');

var createREADME = project => {
    let licenseURL = '';
    switch(project.license){
        case 'Apache 2.0 License':
            licenseURL = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Boost Software License 1.0':
            licenseURL = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'BSD 3-Clause License':
            licenseURL = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'BSD 2-Clause License':
            licenseURL = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            break;
    
   }

    return `${licenseURL}
# ${project.name}
    
## Project Description
#### ${project.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
    
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
#### This application is covered under the ${project.license}.
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
        },
        {
            type: 'rawlist',
            message: 'Select your license',
            name: 'license',
            choices: ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License','BSD 2-Clause License'],
        }
    ])
    .then((response) => 
        createREADME(response)
    )
    .then((response) => 
    fs.writeFile('README.md', response, (error, data) =>
    error ? console.error(error) : console.log(data))
    );