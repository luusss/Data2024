var readline = require("readline-sync");

//input weight
var weight =readline.question("Please input your weight(KG)?");
var height =160;
var bmi =weight/((height/100)**2)

console.log("Hello! Your BMI value is"+bmi)