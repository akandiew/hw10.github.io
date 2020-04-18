const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.clear()
console.log(chalk.yellow('Welcome to the Software Engineering Team Generator.'));
console.log(chalk.blue('To begin assembling your team, please select the type of employee you need:'));

// Input Manager questions by user
const managerq = async function() {
    const {name, id, email, office} = await inquirer.prompt([{
        type : "input",
        name : "name",
        message : "What is the employee's name?",
      },
      {
        type : "input",
        name : "id",
        message : "What is their ID number?",
      },
      {
        type : "input",
        name : "email",
        message : "What is their e-mail address?",
      },
      {
        type : "input",
        name : "office",
        message : "What is their office number?",
      }])
  const manager = new Manager(name, id, email, office)
      
}
// Input Engineer questions by user
const engineerq = async function() {
    const {name, id, email, github} = await inquirer.prompt([{
        type : "input",
        name : "name",
        message : "What is the employee's name?",
      },
      {
        type : "input",
        name : "id",
        message : "What is their ID number?",
      },
      {
        type : "input",
        name : "email",
        message : "What is their e-mail address?",
      },
      {
        type : "input",
        name : "github",
        message : "What is their GitHub name?",
      }])

  const engineer = new Engineer(name, id, email, github)
      
}

// Input Intern questions by user
const internq = async function() {
    const {name, id, email, school} = await inquirer.prompt([{
        type : "input",
        name : "name",
        message : "What is the employee's name?",
      },
      {
        type : "input",
        name : "id",
        message : "What is their ID number?",
      },
      {
        type : "input",
        name : "email",
        message : "What is their e-mail address?",
      },
      {
        type : "input",
        name : "school",
        message : "What school do they attend?",
      }])

  const intern = new Intern(name, id, email, school)
      
}


const app = async () => {
    const {role} = await inquirer.prompt([{
      type : "checkbox",
      name : "role",
      message : "What type of employee are you adding?",
      choices: ["Manager", "Engineer", "Intern"]
    }])

    if (role.includes("Manager")) {
        managerq()
    }
    else if (role.includes("Engineer")) {
        engineerq()
        
    }
    else if (role.includes("Intern")) {
        internq()
        
    }

}
app()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
