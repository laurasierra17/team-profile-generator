const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')

const person1 = new Employee("Carlos", 7, "carlos@carlos.com");
person1.getName();
const person2 = () => new Employee();

const person3 = new Engineer("Laura", 4, "laura@laura.com", "laurasierra17");
person3.getGithub();
const person4 = () => new Engineer();