// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee  = require("./employee");

class Manager   extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email)  
    this.office = office;
  }

  getOffice() {
      return this.office
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
