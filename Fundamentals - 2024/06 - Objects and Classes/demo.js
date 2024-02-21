let person = {
  name: 'Plamen',
  age: 50
}

let copyPerson = JSON.parse(JSON.stringify(person));
person['name'] = 'Ivan';
console.log(person);
console.log(copyPerson);