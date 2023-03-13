const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should create a new Intern object", () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe("object");
    });
});

describe("getSchool", () => {
    it("should return the name of the intern's school", () => {
        const school = "GT";
        const intern = new Intern("Johnny", 1, "johnnyappleseed@gmail.com", school)
        expect(intern.getSchool()).toBe(school);
    });
});

describe("getRole", () => {
    it("should return the intern role", () => {
        const role = "Intern";
        const intern = new Intern("Johnny", 1, "johnnyappleseed@gmail.com", "GT");
        expect(intern.getRole()).toBe(role);
    });
});