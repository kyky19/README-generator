const fs = require('fs');

function renderLicenseBadge(license) {
    if (!license) {
        return ``;
    } else {
        return `![${license} license][(https://img.shields.io/badge/License-${license}-green.svg)](${renderLicenseLink(license)})`
    }
}


function renderLicenseLink(license) {
    if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
    if (license === 'GNU') {
        return 'https://opensource.org/licenses/gpl-license'
    }
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    }
}


function renderLicenseSection(license) {
    if (!license) {
        return '';
    } else {
        return `## Licenses
        This project is covered under the ${license} license.`
    }
}


function generateMarkdown(data) {
  return `# ${data.project}
  ${renderLicenseBadge(data.licenses)}
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Install](#install)
  * [Licenses](#licenses)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ## Description
  ${data.desc}
  ${renderLicenseSection(data.licenses)}
  ## Usage
  ${data.use}
  ## Install
  ${data.install}
  ## Contribute
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  Find any issues? ${data.issues}
  Any further questions?
  Email: ${data.email}
  Github: https://github.com/${data.github}
  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;
