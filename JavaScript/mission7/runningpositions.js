let arr= ["First", "Second", "Third", "Fourth", "I am the last Element"];
console.log('Initial Array: ' , arr);

let newArray = ["Fifth", "Sixth"];
//Inserting positions in the array
arr.splice(4, 0, newArray[0])
arr.splice(5, 0, newArray[1])

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


