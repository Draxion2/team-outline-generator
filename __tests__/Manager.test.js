const Manager = require("../lib/Manager");

// test manager object
test("creates the manager object", () => {
    const newManager = new Manager("James", "jared@gmail.com", 23, 8012922491);

    expect(newManager.name).toBe("James");
    expect(newManager.getRole()).toBe("Manager");
    expect(newManager.getEmail()).toEqual(newManager.email);
    expect(newManager.getId()).toEqual(newManager.id);
    expect(newManager.getOfficeNumber()).toEqual(newManager.officeNumber);
});