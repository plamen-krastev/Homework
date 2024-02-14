let array = [1, 2, 3, 4, 5, undefined] ;
let isTrue = true;
if(array[5] === undefined) {
  isTrue = false;
}
console.log(typeof array[5]);
console.log(isTrue);
console.log(array);