let sortString = (str) => {
	return [...str].sort((a, b) => 
	a.localeCompare(b, "en", { sensitivity: "variant" })).join("");
}

console.log("Sorted String: ");
console.log(sortString("qweDSFGF7667rtyuAaiop"));

console.log('-----------------------------');


var array = ['ab', 'aB', 'Ab', 'AB'],
    mapped = array
        .map((el, i) => ({ index: i, value: [...el].map(c => c === c.toLowerCase() ? ' ' + c : c + ' ').join('') }))
        .sort((a, b) => a.value.localeCompare(b.value)),
    result = mapped.map(el => array[el.index]);

console.log(result);

console.log('-----------------------------');

var array = ['a', 'b', 'bb', 'Bb', 'ba', 'BA', 'B', 'bA'];

array.sort();
console.log(...array);

array.sort((a, b) => a.localeCompare(b, 'kf', { sensitivity: 'case', caseFirst: 'lower' }));
console.log(...array);

array.sort((a, b) => {
    var r;
    Array.from(a).some((c, i) => r = c.localeCompare(b[i], 'kf', { sensitivity: 'case', caseFirst: 'lower' }));
    return r;
});
console.log(...array);