// TODO: Write code to define and export the Employee class
class   Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
        
    }
    getName()   {
        return this.name;

    }
    getID() {
        return this.id;

    }
    getEmail()  {
        return this.email;

    }
    getRole()  {
        return this.role

    }

    
    printInfo() {
        console.log(`Employee name is: ${this.name}`);
        console.log(`Employee ID is: ${this.id}`);
        console.log(`Employee e-mail is: ${this.email}`);
        console.log(`Employee role : ${this.roll}`);

    };

};

module.exports = Employee;
