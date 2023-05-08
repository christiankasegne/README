// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== `none`) {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== `none`) {
    return `\n* [Licenses](#license)\n`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== `none`) {
    return `## License

        licensed under the ${license} license.`;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [license](#license)
- [How to Contribute](#HowtoContribute)
- [Tests](#tests)
- [Contact Info](#contantInfo)

## Installation
${data.installation}  

## Usage
${data.usage}

## Credits
${data.credits}


## License
${renderLicenseBadge(data.license)}

## How to Contribute
${data.contribute}

## Tests
${data.tests}

## Contact-Me
- Name - ${data.name}
- Github - [https://github.com/${data.github}/]
- Email - ${data.email}
`;
}

module.exports = generateMarkdown;
