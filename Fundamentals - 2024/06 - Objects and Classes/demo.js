let person = {
  name: 'Plamen',
  age: 50
}

//deep copy 
let copyPerson = JSON.parse(JSON.stringify(person));
person['name'] = 'Ivan';

console.log(person);
console.log(copyPerson);