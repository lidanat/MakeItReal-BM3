let names = ['Lidana', 'Margarita', 'Valeria', 'Peggy'];
console.log('Initial Array: ', names);

//Inserting in a specified position
//position in what I want to insert
//0 to avoid deleting the existing data
//new value
names.splice(2, 0, 'Dolly');
console.log('New array: ', names)

//To eliminate elements
//Index of the element I want to eliminate
//Amount of elements I want to eliminate
names.splice(2,3);
console.log('Elements deleted: ', names)
