// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
   // Should be false on both accounts, but it's false the first time, and true the second time.  
// Is the program behaving as expected?
   // Yes, for the first launchReady, if/else statement.  No, for the second one.  True is still not the same thing as 'green'.  Although, according to pt. 5 of this, that apparently doesn't matter because it states that the problem is that the launchReady variable is being changed.  So apparently true is === 'green' somehow???
   // Are these separate statements somehow?  Is it saying, "'If crewStatus = true' and 'If 'computerStatus = green' is true', then go cuz they're both true?"  If so, how are we supposed to tell the difference between that being the intention and the intention being "'If crewStatus = green' and 'if computerStatus = green' are both true, then go"??

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }