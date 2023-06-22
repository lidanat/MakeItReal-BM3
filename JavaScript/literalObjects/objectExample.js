//Object: Set of properties
let person = {
    name: 'Alejandro',
    lastName: 'Cadavid',
    age: 25,
    height: 1.6
}

console.log('Name: ' + person.name);
console.log('Last Name: ' + person.lastName);
console.log('Age: ' + person.age);
console.log('Height: ' + person.height)

console.log('Name: ' + person['name']);
console.log('Last Name: ' + person['lastName']);
console.log('Age: ' + person['age']);
console.log('Height: ' + person['height'])

//Adding elements to the object using only the (.)

person.address = 'Street 46';
console.log('Modified: ', person)

//Delete a property using delete 
delete person.age;

console.log('Modified: ', person)
