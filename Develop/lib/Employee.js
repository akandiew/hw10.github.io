// TODO: Write code to define and export the Employee class
class   Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
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
        return "Employee";

    }

    
    printInfo() {
        console.log(`Employee name is: ${this.name}`);
        console.log(`Employee ID is: ${this.id}`);
        console.log(`Employee e-mail is: ${this.email}`);

    };

};

module.exports = Employee;
