const person = {
  firstName: "Peter",
  lastName: "Johnson",
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName()); // 'Peter Johnson'

const getFullName = person.fullName;
console.log(getFullName.toString());
console.log(getFullName());

const anotherPerson = {
  firstName: "Bob",
  lastName: "Smith",
};
anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName());

console.log("\n##########################\n");

function print() {
  console.log(`${this.name} is printing a page`);
  }
  function scan() {
  console.log(`${this.name} is scanning a document`);
  }
  const printer = { name: 'ACME Printer',
  print };
  const scanner = { name: 'Initech Scanner',
  scan };
  const copier = { name: 'ComTron Copier',
  print,
  scan };

  console.log(scan());