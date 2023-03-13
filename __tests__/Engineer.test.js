const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("should create a new Engineer object", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    });
});

describe("getGithub", () => {
    it("should return the engineer's GitHub username", () => {
        const github = "github.com/jappleseed";
        const engineer = new Engineer("Johnny", 1, "johnnyappleseed@gmail.com", github)
        expect(engineer.getGithub()).toBe(github);
    });
});

describe("getRole", () => {
    it("should return the engineer role", () => {
        const role = "Engineer";
        const engineer = new Engineer("Johnny", 1, "johnnyappleseed@gmail.com", "github.com/jappleseed");
        expect(engineer.getRole()).toBe(role);
    });
});