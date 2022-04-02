const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(school, id) {
        super();
        this.school = school;
        this.id = id;
    }

    getSchool() {
        return this.school;
    }

    getId() {
        return this.id;
    }
}

// export the intern object
module.exports = Intern;