function sortingByTwo(array) {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(array.join('\n'));
}

sortingByTwo(['alpha', 'beta', 'gamma']);
sortingByTwo(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);