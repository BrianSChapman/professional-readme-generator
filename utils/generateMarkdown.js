// Function written to render the license badge if user selects a license.
function renderLicenseBadge(license) {
  const badgeImg = [
    'none',
    'Apache License 2.0: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    'GNU General Public License v3.0: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    'MIT License:[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'BSD 2-Clause Simplified License: [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]',
    'Boost Software License 1.0: [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
    'Creative Commons Zero v1.0 Universal: [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]',
    'Eclipse Public License 2.0: [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]',
    'Mozilla Public License 2.0: [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    'The Unlicense: [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]',
  ]
   if(badgeImg == 'none'){
       return('');
  }       else { 
      return (license)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const linkToLicense = [
    'none',    
    'Apache License 2.0: (https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License v3.0: (https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 2-Clause Simplified License: (https://opensource.org/licenses/BSD-2-Clause)',
    'Boost Software License 1.0:(https://www.boost.org/LICENSE_1_0.txt)',
    'Creative Commons Zero v1.0 Universal:(http://creativecommons.org/publicdomain/zero/1.0/)',
    'Eclipse Public License 2.0: (https://opensource.org/licenses/EPL-1.0)',
    'Mozilla Public License 2.0:(https://opensource.org/licenses/MPL-2.0)',
    'The Unlicense:(http://unlicense.org/)',
  
  ]
  if (license.value == 'none') {
    return('');
  }  else {
    return linkToLicense[license]
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !=='none'){
    return `Please go to ${renderLicenseLink(license)} for additional information.`
  } else {
    return('');
  }


}

// TODO: Create a function to generate markdown for README
generateMarkdown = ({ title, userName, email,description, installation, usage, contribute, testing, license}) => {
  return `# ${title}

  ${renderLicenseBadge(license)}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage Instruction](#Usage)
- [Contributions](#Contributions)
- [Testing](#Testing)
- [Questions](#Questions)
- [License](#License)

## Description
    ${description}

## Usage
    ${usage}

## Installation
    ${installation}

## Usage
    ${usage}

## Contributions
    ${contribute}

## Testing
    ${testing}

## Questions
    ${userName}
    ${email}

## License
    ${renderLicenseSection(license)}
  `;
}

module.exports = generateMarkdown;