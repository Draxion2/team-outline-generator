const Employee = require("../lib/Employee");

// test employee object
test("creates the employee object", () => {
    const newEmployee = new Employee("James", "james@gmail.com", 1);

    expect(newEmployee.name).toBe("James");
    expect(newEmployee.getEmail()).toEqual(newEmployee.email);
    expect(newEmployee.getId()).toEqual(newEmployee.id);
});