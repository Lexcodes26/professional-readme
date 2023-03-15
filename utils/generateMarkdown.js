// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(licenseType) {
//   if (licenseType === "MIT") {
//     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   } else if (licenseType === "Apache 2.0") {
//     return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//   } else if (licenseType === "GPLv3") {
//     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//   } else {
//     return "";
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(licenseType) {
//   if (licenseType === "MIT") {
//     return {
//       badge:
//         "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
//       link: "https://opensource.org/licenses/MIT",
//     };
//   } else if (licenseType === "Apache 2.0") {
//     return {
//       badge:
//         "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
//       link: "https://opensource.org/licenses/Apache-2.0",
//     };
//   } else if (licenseType === "GPLv3") {
//     return {
//       badge:
//         "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
//       link: "https://www.gnu.org/licenses/gpl-3.0",
//     };
//   } else {
//     return {
//       badge: "",
//       link: "",
//     };
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(licenseType) {
//   const licenseBadgeAndLink = licenseBadgeAndLink(licenseType);

//   if (licenseBadgeAndLink.badge === "" || licenseBadgeAndLink.link === "") {
//     return "";
//   }

//   return `
// ## License

// This project is licensed under the [${licenseType}](${licenseBadgeAndLink.link}) License.

// ${licenseBadgeAndLink.badge}
// `;
// }

// // TODO: Create a function to generate markdown for README
// // function generateMarkdown(data) {
// //   return `# ${data.title}
// //}

// function generateReadme({
//   projectName,
//   projectDescription,
//   authorName,
//   authorEmail,
//   licenseType,
// }) {
//   const licenseSection = renderLicenseSection(licenseType);

//   return `
//   # ${project.Name}

// ${projectDescription}

// ## Table of Contents

// - [Installation](#installation)
// - [Usage](#usage)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [License](#license)
// - [Contact](#contact)

// ## Installation

// To install this project, run the following command(s):

// \`\`\`
// npm install
// \`\`\`

// ## Usage

// To use this project, run the following command(s):

// \`\`\`
// npm start
// \`\`\`

// ## Contributing

// Contributions are welcome! Please read [CONTRIBUTING](CONTRIBUTING.md) for details.

// ## Tests

// To run tests, run the following command(s):

// \`\`\`
// npm test
// \`\`\`

// ${licenseSection}

// ## Contact

// For questions or comments about this project, please contact ${authorName} at ${authorEmail}.
// `;
// }

// module.exports = generateMarkdown;

// do not need license setup outside of generate markdown
function generateMarkdown(data) {
  //license
  let licenseOption = `${data.license}`;
  let licenseLink = "";
  //if conditional to give the license the correct link
  if (licenseOption === "GNU AGPLv3") {
    licenseOption = "GNUAGPLv3";
    licenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
  }
  if (licenseOption === "GNU GPLv3") {
    licenseOption = "GNUGPLv3";
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
  }
  if (licenseOption === "GNU LGPLv3") {
    licenseOption = "GNULGPLv3";
    licenseLink = "https://choosealicense.com/licenses/lgpl-3.0/";
  }
  if (licenseOption === "Mozilla Public License 2.0") {
    licenseOption = "MozillaPublicLicense2.0";
    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
  }
  if (licenseOption === "Apache License 2.0") {
    licenseOption = "ApacheLicense2.0";
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  }
  if (licenseOption === "MIT License") {
    licenseOption = "MITLicense";
    licenseLink = "https://choosealicense.com/licenses/mit/";
  }
  if (licenseOption === "Boost Software License 1.0") {
    licenseOption = "BoostSoftwareLicense1.0";
    licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
  }
  if (licenseOption === "The Unlicense") {
    licenseOption = "TheUnlicense";
    licenseLink = "https://choosealicense.com/licenses/unlicense/";
  }

  //create variable to hold markdown template and dynamically add to it
  let markdownTemplate =
    //title, badge, and description

    `# ${data.title}
## Description
${data.description}
![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)
You can access more badges and their purposes at [shields.io](https://shields.io)
`;
  //create optional sections in a table of contents to
  //be added after required title, description

  let tableOfContents = `## Table of Contents`;
  if (data.installation) {
    tableOfContents += `
  * [Installation](#installation)`;
  }
  if (data.instructions) {
    tableOfContents += `
  * [Usage](#usage)`;
  }
  if (data.contribution) {
    tableOfContents += `
  * [Contribution](#contribution)`;
  }
  if (data.testing) {
    tableOfContents += `
  * [Testing](#testing)`;
  }

  //append table to template
  markdownTemplate += tableOfContents;

  //add contact info and license (required)
  markdownTemplate += `
  * [Questions](#questions)`;
  markdownTemplate += `
  * [License](#license)
    
    `;

  //add optional sections content

  //installation
  if (data.installation) {
    markdownTemplate += `
## Installation
    
  _Follow these steps to properly install this application:_
  ${data.installation}`;
  }

  //usage
  if (data.instructions) {
    markdownTemplate += `
      
## Usage
  _Instructions for use:_
  ${data.instructions}`;
  }

  //contributions
  if (data.contribution) {
    markdownTemplate += `
      
## Contribution
  _If you would like to contribute, please adhere to these guidelines:_
  ${data.contribution}`;
  }

  //testing
  if (data.testing) {
    markdownTemplate += `
      
## Testing
  _Instructions for testing application:_
  ${data.testing}`;
  }

  //questions
  markdownTemplate += `
      
## Questions
      
  _For further questions:_
  ${data.questions}
  
  _Contact Info:_
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})`;

  markdownTemplate += `
    
## License
      
  _This application has the ${data.license}._
      
  For more information please view the [license description](${licenseLink}).
  
  `;
  return markdownTemplate;
}

module.exports = generateMarkdown;
