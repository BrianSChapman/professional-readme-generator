// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Usage)
  - [Usage Instruction](#Usage)
  - [Contributions](#Contribution)
  - [Testing](#Testing)
  -Questions(#Questions)
  - [License](#License)

  ## Description
    ${answers.description}

  ## Usage
    ${answers.usage}

  ## Installation
    ${answers.installation}

  ## Usage
    ${answers.usage}

  ## Contributions
    ${answers.contribute}

  ## Testing
    ${answers.testing}

    ## Questions
    ${answers.userName}
    ${answers.email}

  ## License
    ${answers.license}
  `
}
  
;

module.exports = generateMarkdown;
