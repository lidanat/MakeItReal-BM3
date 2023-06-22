var str = "Hello world";

//for (let i = 0; i < str.length; i ++){
   // console.log(str[i]);
//}

let convertedString = str.split('');
console.log('String to array: ', convertedString)

let convertedString2 = str.split(' ');
console.log('String to array: ', convertedString2)

let word = 'test,separate,string,with,commas';

let wordArray = word.split(',');
console.log('Array with commas : ', wordArray)