//Object: Set of properties
let person = {
    name: 'Alejandro',
    lastName: 'Cadavid',
    age: 25,
    height: 1.6
}

for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(person[key])
    }
  }

  let key = Object.keys(person);
for (let i=0; i < key.length; i++) {
  let secondKey = key[i];
  console.log(person[secondKey]);
}