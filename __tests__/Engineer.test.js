const Engineer = require("../lib/Engineer");

// test engineer object
test("creates the engineer object", () => {
    const newEngineer = new Engineer("Patrick", "patrick@gmail.com", 2, "patrick210");

    expect(newEngineer.name).toBe("Patrick");
    expect(newEngineer.getRole()).toBe("Engineer");
    expect(newEngineer.getEmail()).toEqual(newEngineer.email);
    expect(newEngineer.getId()).toEqual(newEngineer.id);
    expect(newEngineer.getGithub()).toEqual(newEngineer.github);
});