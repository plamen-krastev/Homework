let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;
for(let key in assocArr) {
console.log(key + " = " + assocArr[key]);
}

console.log('---------------');

obj = { a: 1, b: 2 };
let { a, b } = obj;
console.log(obj.a, '->', obj.b);
console.log(a, b);
