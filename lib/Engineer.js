const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(github, id) {
        super();
        this.github = github;
        this.id = id;
    }

    getGithub() {
        return this.github;
    }
    
    getId() {
        return this.id;
    }

    getRole() {
        return Engineer;
    }
}

// export the Engineer object
module.exports = Engineer;