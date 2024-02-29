let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;
for (let key in assocArr) {
    console.log(key + " = " + assocArr[key]);
}

console.log(assocArr);
console.log(JSON.stringify(assocArr));

let numbers = [1, 6, 8, 12, 14];

for (let num in numbers) {
  console.log(num);
}