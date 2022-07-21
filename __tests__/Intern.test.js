const Intern = require('../lib/Intern');

describe("Initialization", () => {
    // Positive test - ensures the correct initialization of the class
    it("should create an object with properties of name, id, email, and school when called with the 'new' keyword", () => {
        // Arrange
        const name = "Laura";
        const id = 4;
        const email = "laura@laura.com"
        const school = "University of Central Florida"

        // Act
        const obj = new Intern(name, id, email, school);

        // Assert
        expect(obj).toEqual({ "name": name, "id": id, "email": email, "school": school });
    })
})

// Ensures the function returns the object's name value
describe("getName", () => {
    it("should return the object's 'name' property value", () => {
        const obj = new Intern("Laura", 4, "laura@laura.com", "UCF");
        expect(obj.getName()).toBe("Laura")
    })
})

// Ensures the function returns the object's id value
describe("getId", () => {
    it("should return the object's 'id' property value", () => {
        const obj = new Intern("Laura", 4, "laura@laura.com", "UCF");
        expect(obj.getId()).toBe(4)
    })
})

// Ensures the function returns the object's email value
describe("getEmail", () => {
    it("should return the object's 'email' property value", () => {
        const obj = new Intern("Laura", 4, "laura@laura.com", "UCF");
        expect(obj.getEmail()).toBe("laura@laura.com")
    })
})

// Ensures the function returns the object's school value
describe("getEmail", () => {
    it("should return the object's 'email' property value", () => {
        const obj = new Intern("Laura", 4, "laura@laura.com", "UCF");
        expect(obj.getSchool()).toBe("UCF")
    })
})

// Ensures the function returns the object's role
describe("getRole", () => {
    it("should return the object's role/class name", () => {
        const obj = new Intern("Laura", 4, "laura@laura.com", "UCF");
        expect(obj.getRole()).toBe("Intern")
    })
})