const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should create a new Manager object", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    });
});

describe("getOfficeNum", () => {
    it("should return the office number of the manager", () => {
        const officeNum = "122333";
        const manager = new Manager("Johnny", 1, "johnnyappleseed@gmail.com", officeNum)
        expect(manager.getOfficeNum()).toBe(officeNum);
    });
});

describe("getRole", () => {
    it("should return the manager role", () => {
        const role = "Manager";
        const manager = new Manager("Johnny", 1, "johnnyappleseed@gmail.com", "122333");
        expect(manager.getRole()).toBe(role);
    });
});