// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee  = require("./employee");

class Manager   extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)  
    this.officeNumber = officeNumber;
  }

  getofficeNumber() {
      return this.officeNumber
  } 
  
  getRole() {
     return "Manager"
  }
  
  printInfo() {
    console.log(`Employee's office numebr is : ${this.officeNumber}`);
    console.log(`Employee role is : ${this.role}`);
};


}
module.exports = Manager;
