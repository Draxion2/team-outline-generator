const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(officeNumber, id) {
        super();
        this.officeNumber = officeNumber;
        this.id = id;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return Manager;
    }

}

// export the manager object
module.exports = Manager;