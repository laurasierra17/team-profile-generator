const Manager = require('../lib/Manager');

describe("Initialization", () => {
    // Positive test - ensures the correct initialization of the class
    it("should create an object with properties of name, id, email, and officeNumber when called with the 'new' keyword", () => {
        // Arrange
        const name = "Laura";
        const id = 4;
        const email = "laura@laura.com"
        const officeNumber = "100"

        // Act
        const obj = new Manager(name, id, email, officeNumber);

        // Assert
        expect(obj).toEqual({ "name": name, "id": id, "email": email, "officeNumber": officeNumber });
    })
})

// Ensures the function returns the object's role
describe("getRole", () => {
    it("should return the object's role/class name", () => {
        const obj = new Manager("Laura", 4, "laura@laura.com", "100");
        expect(obj.getRole()).toBe("Manager")
    })
})