const Employee = require('../lib/Employee');

describe("Initialization", () => {
    // Positive test - ensures the correct initialization of the class
    it("should create an object with properties of name, id, and email when called with the 'new' keyword", () => {
        // Arrange
        const name = "Laura";
        const id = 4;
        const email = "laura@laura.com"

        // Act
        const obj = new Employee(name, id, email);

        // Assert
        expect(obj).toEqual({ "name": name, "id": id, "email": email});
    })

    // Exception test
    // it("should throw an error if not provided any values", () => {
    //     // Arrange
    //     const employee = () => new Employee();
    //     const err = new Error(
    //         "Expect parameters 'name', 'id', 'email' to be non empty"
    //     );

    //     // Assert
    //     expect(employee).toThrowError(err);
    // })
})

// Ensures the function returns the object's name value
describe("getName", () => {
    it("should return the object's 'name' property value", () => {
        const obj = new Employee("Laura", 4, "laura@laura.com");
        expect(obj.getName()).toBe("Laura")
    })
})

// Ensures the function returns the object's id value
describe("getId", () => {
    it("should return the object's 'id' property value", () => {
        const obj = new Employee("Laura", 4, "laura@laura.com");
        expect(obj.getId()).toBe(4)
    })
})

// Ensures the function returns the object's email value
describe("getEmail", () => {
    it("should return the object's 'email' property value", () => {
        const obj = new Employee("Laura", 4, "laura@laura.com");
        expect(obj.getEmail()).toBe("laura@laura.com")
    })
})

// Ensures the function returns the object's role
describe("getRole", () => {
    it("should return the object's role/class name", () => {
        const obj = new Employee("Laura", 4, "laura@laura.com");
        expect(obj.getRole()).toBe("Employee")
    })
})