// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee  = require("./employee");

class Manager   extends Employee {
  constructor(officeNumber) {
    super(name, id, email, role)  
    this.officeNumber = officeNumber;
    this.role = "Manager"
  }

  getofficeNumber() {
      return this.officeNumber
  } 
  
  getRole() {
     return this.role
  }
  
  printInfo() {
    console.log(`Employee's office numebr is : ${this.officeNumber}`);
    console.log(`Employee role is : ${this.role}`);
};


}
module.exports = Manager;
