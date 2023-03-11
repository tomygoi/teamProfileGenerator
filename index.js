const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

