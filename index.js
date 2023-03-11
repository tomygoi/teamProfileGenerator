const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/template');
const employees = [];
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID number of the team manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the team manager?'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the office number of the team manager?'
    }
];

function addMember () {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextOption',
            message: 'What would you like to do next?',
            choices: [
                "Add an engineer",
                "Add an intern",
                "Finish building team"
            ]
        }
    ])
    .then(data => {
        switch (data.nextOption) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            case 'Finish building team':
                const page = generateHTML(employees);
                fs.writeFileSync('./dist/index.html', page);
                break;
        }
    })
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is ID number of the engineer?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the engineer?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of the engineer?'
        },
    ])
    .then(data => {
        const teamMember = new Engineer(data);
        employees.push(teamMember);
        addMember();
    })
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the intern?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the intern?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?'
        }
    ])
    .then(data => {
        const teamMember = new Intern(data);
        employees.push(teamMember);
        addMember();
    })
};

function init() {
    return inquirer.prompt(managerQuestions);
};

init()
.then(data => {
    const teamMember = new Manager(data);
    employees.push(teamMember);
    addMember();
});
