//Body Max Index formula
function bmi(weight, height){
    return weight/ (height ** 2)
}

let calculation = bmi(47, 1.59);

console.log('Your BMI is ' + calculation)