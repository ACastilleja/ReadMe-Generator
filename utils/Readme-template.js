const fs = require('fs');

module.exporte = templateData => {
    const {github, project, email, description, license, install, test, using, contribution, ...header } = templateData;

    return `
    
    #${project}
    (https://img.shields.io/badge/license-${license}-blue.svg)
    ====================================================
    ## Description
    --------------
    ${description}

    ## Table of Content.

    *[Installation](#installation)

    *[Usage](#usage)

    *[License](#license)

    *[Contribution](#contribution)

    *[Test](#tests)

    *[Questions](#questions)

    ## Installation
    ----------------
    To install necessary dependencies, run the following command:

    ${install}

    ## Usage
    ---------------
    ${using}

    ## License
    ---------------
    This project is licensed under the ${license} license.

    ## Contribution
    ---------------
    ${contribution}

    ## Tests
    --------------
    To run tests, run teh following command:

    ${test}

    ## Questions

    If you have any questions please email me at ${email}. View more of my work at
    (https:${github}/github.com)


    `;
};