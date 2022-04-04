const Intern = require("../lib/Intern");

// test intern object
test("creates the intern object", () => {
    const newIntern = new Intern("Harold", "harold@gmail.com", 3, "Rocky Short State");

    expect(newIntern.name).toBe("Harold");
    expect(newIntern.getRole()).toBe("Intern");
    expect(newIntern.getEmail()).toEqual(newIntern.email);
    expect(newIntern.getId()).toEqual(newIntern.id);
    expect(newIntern.getSchool()).toEqual(newIntern.school);
});