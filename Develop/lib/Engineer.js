// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer  extends Employee {
  constructor(github) {
    super(name, id, email, role)  
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
      return this.github
  }
  
  getRole() {
      return this.role
  }
  

  printInfo() {
    console.log(`Employee github user name is: ${this.github}`);
    console.log(`Employee role is: ${this.role}`);

};
}
module.exports = Engineer;
