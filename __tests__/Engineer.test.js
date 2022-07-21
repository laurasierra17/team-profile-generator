const Engineer = require('../lib/Engineer');

describe("Initialization", () => {
    // Positive test - ensures the correct initialization of the class
    it("should create an object with properties of name, id, email, and github when called with the 'new' keyword", () => {
        // Arrange
        const name = "Laura";
        const id = 4;
        const email = "laura@laura.com"
        const github = "laurasierra17"

        // Act
        const obj = new Engineer(name, id, email, github);

        // Assert
        expect(obj).toEqual({ "name": name, "id": id, "email": email, "github": github });
    })
})

// Ensures the function returns the object's name value
describe("getName", () => {
    it("should return the object's 'name' property value", () => {
        const obj = new Engineer("Laura", 4, "laura@laura.com", "laurasierra17");
        expect(obj.getName()).toBe("Laura")
    })
})

// Ensures the function returns the object's id value
describe("getId", () => {
    it("should return the object's 'id' property value", () => {
        const obj = new Engineer("Laura", 4, "laura@laura.com", "laurasierra17");
        expect(obj.getId()).toBe(4)
    })
})

// Ensures the function returns the object's email value
describe("getEmail", () => {
    it("should return the object's 'email' property value", () => {
        const obj = new Engineer("Laura", 4, "laura@laura.com", "laurasierra17");
        expect(obj.getEmail()).toBe("laura@laura.com")
    })
})

// Ensures the function returns the object's github value
describe("getGithub", () => {
    it("should return the object's 'email' property value", () => {
        const obj = new Engineer("Laura", 4, "laura@laura.com", "laurasierra17");
        expect(obj.getGithub()).toBe("laurasierra17")
    })
})


// Ensures the function returns the object's role
describe("getRole", () => {
    it("should return the object's role/class name", () => {
        const obj = new Engineer("Laura", 4, "laura@laura.com", "laurasierra17");
        expect(obj.getRole()).toBe("Engineer")
    })
})