const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "project_title",
            message: "What is the title of your project?"
          },
          {
            type: "input",
            name: "description",
            message: "Describe your project."
          },
          {
            type: "input",
            name: "installation",
            message: "Any installations required?"
          },
          {
            type: "input",
            name: "useage",
            message: "What is the purpose of this application?"
          },
          {
            type: "input",
            name: "contributing",
            message: "Any contribution guidlines?"
          },
          {
            type: "input",
            name: "tests",
            message: "Any instructions for testing required?"
          },
          {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: [
              "[MIT License](LICENSE.txt)", 
              "[GNU GPLv3 License](COPYING.txt)", 
            ]
          },
          {
            type: "input",
            name: "email",
            message: "Enter your email account."
          },
          {
            type: "input",
            name: "github",
            message: "Enter your github username."
          }
        ]);
    }

function generateREADME(responses) {
    return `# ${responses.project_title}

    #### Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributing](#contributing)
    5. [Code of Conduct](#code-of-conduct)
    6. [Tests](#tests)
    7. [License](#license)
    8. [Questions](#questions)
    
    ## Description
    * ${responses.description}
    ## Installation
    * ${responses.install}
    ## Usage
    * ${responses.use}
    ## Contributing
    * ${responses.contributions}
    ## Tests
    * ${responses.test}
    ## License
    * licensed under the ${responses.license}
    ## Questions
    * For additional help or questions about collaboration, please reach out to ${responses.email}
    * Follow me on Github at [${responses.github}](http://github.com/${responses.github})`;
      
    }
    
    promptUser()
      .then(function(responses) {
        const readme = generateREADME(responses);
    
     
        return writeFileAsync("README.md", readme);
      })
      .then(function() {
        console.log("Your README.md file has been created.");
      })
      .catch(function(err) {
        console.log(err);
      });
