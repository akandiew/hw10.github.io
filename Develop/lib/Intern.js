// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Intern extends Employee {
  constructor(school, role) {
    this.school = school;
    this.role = "Intern"
  }

  getSchool() {
      return this.school
  }
  
  getRole() {
      return this.role
  }
  

  printInfo() {
    console.log(`Employee's school is : ${this.school}`);
    console.log(`Employee role is: ${this.role}`);

};
}
module.exports = Intern;
