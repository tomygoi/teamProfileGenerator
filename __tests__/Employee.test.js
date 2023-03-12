const Employee = require('../lib/Employee');

describe("Employee", () => { 
    it("should create a new employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
});

describe("getName", () => { 
    it("should return the employee's ID", () => {
        const name = "Johnny"
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
});

describe("getId", () => { 
    it("should return the employee's id number", () => {
        const id = 1;
        const employee = new Employee("Johnny", id);
        expect(employee.getId()).toBe(id);
    });
});

describe("getEmail", () => { 
    it("should return the employee's email", () => {
        const email = "johnnyappleseed@gmail.com";
        const employee = new Employee("Johnny", 1, email);
        expect(employee.getEmail()).toBe(email);
    });
});
describe("getRole", () => { 
    it("should return the employee's role", () => {
        const role = "Employee";
        const employee = new Employee("Johnny", 1, "johnnyappleseed@gmail.com");
        expect(employee.getRole()).toBe(role);
    });
});