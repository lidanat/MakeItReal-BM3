let arr= ["First", "Second", "Third", "Fourth", "I am the last Element"];
console.log('Initial Array: ' , arr);

let newArray = ["Fifth", "Sixth"];
//Inserting positions in the array
arr.splice(4, 0, newArray[0])
arr.splice(5, 0, newArray[1])

console.log('Final Array: ', arr)
