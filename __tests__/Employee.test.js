const { exportAllDeclaration } = require('@babel/types');
const Employee = require('../lib/Employee');

describe("Initialization", () => {
    it("should create an object with properties of name, id, and email when called with the 'new' keyword", () => {
        // Arrange
        const name = "Laura";
        const id = 4;
        const email = "laura@laura.com"

        // Act
        const obj = new Employee(name, id, email);

        // Assert
        expect(obj).toEqual({ name: name, id: id, email: email});
    })
})

describe("getName", () => {

})

describe("getId", () => {

})

describe("getEmail", () => {

})

describe("getRole", () => {

})