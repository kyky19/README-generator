const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'To start creating a README file, please provide your name: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('To continue, please enter your name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: ',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('To continue, please enter your email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github id: ',
        validate: githubIdInput => {
            if (githubIdInput) {
                return true;
            } else {
                console.log('To continue, please enter your Github ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'Please enter your project title: ',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('To continue, please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter a description of your project: ',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('To continue, please enter a description of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'use',
        message: 'Please enter how to use your project: ',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('To continue, please enter how to use your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter how to install your project: ',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('To continue, please enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'issues',
        message: 'Please enter how users can report issues in the project: ',
        validate: issuesInput => {
            if (issuesInput) {
                return true;
            } else {
                console.log('To continue, please enter instructions to report issues');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide instructions on how users can contribute to the project: ',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('To continute, please enter instructions on how to contribute');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide the tests for your project and how to use them: ',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('To continue, please provide the tests used and how to use them');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLiscense',
        message: 'Please select whether or not to use a liscense: ',
        default: false
    },
    {
        type: 'list',
        name: 'liscenses',
        message: 'Please select whether or not to include a liscense: ',
        choices: ['Apache', 'GNU', 'MIT'],
        when: ({ confirmLiscense }) => {
            if (confirmLiscense) {
                return true;
            } else {
                return false;
            }
        } 
    },
];


const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('README successfully created!')
            });
        })
    })
}


const init = () => {
    return inquirer.prompt(questions);
}


init()
.then(input => {
    return generateMarkdown(input);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})