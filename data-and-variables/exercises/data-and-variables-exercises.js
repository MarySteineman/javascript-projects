// Declare and assign the variables below
const nameOfTheSpaceShuttle = "Determination";
const shuttleSpeedMph = 17500;
const distanceToMarsKm = 225000000;
const distanceToTheMoonKm = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "nameOfTheSpaceShuttle");
console.log(typeof "shuttleSpeedMph");
console.log(typeof "distanceToMarsKm");
console.log(typeof "distanceToTheMoonKm");
console.log(typeof "milesPerKm");

// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(nameOfTheSpaceShuttle + "will take" + daysToMars + "to reach Mars.");

// Calculate a trip to the moon below
let milesToTheMoon = distanceToTheMoonKm * milesPerKm;
let hoursToTheMoon = milesToTheMoon / shuttleSpeedMph;
let daysToTheMoon = hoursToTheMoon / 24;

// Print the results of the trip to the moon below
console.log(nameOfTheSpaceShuttle + "will take" + daysToTheMoon + "to reach the Moon.");