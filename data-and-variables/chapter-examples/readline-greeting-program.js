const input = require('readline-sync');

let name = input.question("Enter your name: ");
let name2 = input.question("Enter second name:");

console.log("Hello, " + name,  name2 + "!");