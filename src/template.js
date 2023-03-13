const managerCard = (manager) => {
    return `
    <div class = "card">
        <div class = "card-header">
            <h2 class = "card-title">${manager.getName()}</h2>
            <h3 class = "card-title">${manager.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "card-list">
                <li class = "card-list-content">ID: ${manager.getId()}</li>
                <li class = "card-list-content">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class = "card-list-content">Office Number: ${manager.getOfficeNum()}</li>
            </ul>
        </div>
    </div>
    `;
};

const engineerCard = (engineer) => {
    return `
    <div class = "card">
        <div class = "card-header">
            <h2 class = "card-title">${engineer.getName()}</h2>
            <h3 class = "card-title">${engineer.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "card-list">
                <li class = "card-list-content">ID: ${engineer.getId()}</li>
                <li class = "card-list-content">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class = "card-list-content">GitHub: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `;
};

const internCard = (intern) => {
    return `
    <div class = "card">
        <div class = "card-header">
            <h2 class = "card-title">${intern.getName()}</h2>
            <h3 class = "card-title">${intern.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "card-list">
                <li class = "card-list-content">ID: ${intern.getId()}</li>
                <li class = "card-list-content">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class = "card-list-content">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
};

function addCard (employee) {
    switch(employee.getRole()) {
        case 'Manager':
            return managerCard(employee);
        case 'Engineer':
            return engineerCard(employee);
        case 'Intern':
            return internCard(employee);
        default: 
            return "";       
    }
}

function buildSite(data) {
    let site = ''
    data.forEach(datum => {
        site += addCard(datum)
    }) 
    return site
}

const generateHTML = (data) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/assets/styles.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <div class = "header-container">
            <div class = "row">
                <h1 class = "page-header">My Team</h1>
            </div>
        </div>
    </header>
</body>
<section>
    <div class="container">
        <div class="row">
            <div class="team">
                ${buildSite(data)}
            </div>
        </div>
    </div>
</section>
</html>
    `;
};
module.exports = generateHTML;