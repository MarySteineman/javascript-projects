// Declare and initialize the variables for exercise 1 here:
const engineIndicatorLight = 'red blinking';
const spaceSuitsOn = true;
const shuttleCabinReady = true;
const crewStatus = spaceSuitsOn && shuttleCabinReady;
const computerStatusCode = 200;
const shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:
// If the engine indicator lights are green, then print 'engines have started'.  If the lights are blinking green, then print 'engines are preparing to start'.  If neither of those things are happening, print 'engines are off'.  Since the lights have been declared and initialized as red, we will skip right to the last message, 'engines are off'. 
//Prediction is correct!

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
