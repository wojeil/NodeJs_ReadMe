function generateMarkdown(data) {
  return `
# ${data.title}


## Description 

${data.description}


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation] ${data.installation}
* [Usage] ${data.usage}
* [Credits] ${data.contributing}
* [License]${data.license}


## Installation

What are the steps required to install your project? ${data.installation}


## Usage 
${data.usage}



## Credits
${data.contributing}




## License
${data.license}


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.


---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.



`;
}

module.exports = generateMarkdown;
