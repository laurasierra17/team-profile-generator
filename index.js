const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// testing employee
const person1 = new Employee("Carlos", 7, "carlos@carlos.com");
person1.getName();
const person2 = () => new Employee();

// testing engineer
const person3 = new Engineer("Laura", 4, "laura@laura.com", "laurasierra17");
person3.getGithub();
const person4 = () => new Engineer();

// testing manager
const person5 = new Manager("Carlos", 7, "carlos@carlos.com", "130");
person5.getRole();

// testing intern
const person6 = new Intern("Argyle", 9, "argyle@pizza.com", "Plant University");
person6.getSchool();