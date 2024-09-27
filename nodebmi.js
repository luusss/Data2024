var readline = require("readline-sync");

//input weight
var weight =readline.questionInt("Please input your weight(KG)? ");
var height =readline.questionInt("Please input your height(cm)? ");
var bmi =weight/((height/100)**2)

console.log("Hello! Your BMI value is : "+bmi)

if (bmi < 18.5) {
    console.log('體重過輕');
  } else if (18.5<=bmi<24) {
    console.log('健康體重');
  }
  else if (24<=bmi<27) {
    console.log('體重過重');
  }
  else if (27 <= bmi < 30) {
    console.log=('輕度肥胖');
  }else if (30 <= bmi < 35) {
    console.log('中度肥胖');
  }else if (bmi >= 35) {
    console.log('重度肥胖');
  }

 