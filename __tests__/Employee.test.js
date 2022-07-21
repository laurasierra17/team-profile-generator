const { exportAllDeclaration } = require('@babel/types');
const Employee = require('../lib/Employee');

describe("Initialization", () => {
    // Positive text
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

describe("getName", () => {
    it("should return the object's 'name' property value", () => {
        const obj = new Employee("Laura", 4, "laura@laura.com");
        expect(obj.getName()).toBe("Laura")
    })

})

describe("getId", () => {

})

describe("getEmail", () => {

})

describe("getRole", () => {

})