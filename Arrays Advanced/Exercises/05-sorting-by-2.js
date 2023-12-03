function sorting(arr) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join("\n"));

}

sorting(['alpha', 'beta', 'gamma']);
sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);