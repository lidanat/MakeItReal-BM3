//first argument = string initial Index
//second argument = amount of characters that I want to print
//substr is deprecated

let longString = 'Hello World';
console.log(longString.substr(0, 4));
console.log(longString.substring(5, 7));

//Replace
let replaceString = 'Hello World';
console.log(replaceString.replace('World', 'Lidana'));

//Includes
console.log(replaceString.includes('World'));
