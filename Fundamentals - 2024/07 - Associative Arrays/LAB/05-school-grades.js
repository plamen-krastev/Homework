function solve(input) {

    let students = {};

    for (let element of input) {
        let token = element.split(' ');
        let name = token.shift();
        for (let grade of token) {
            if (!students.hasOwnProperty(name)) {
                students[name] = grade;
            } else {
                students[name] = students[name] + grade;
            }
        }
    }

    let result = Object
        .entries(students)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of result) {
        let avg = 0;
        let sum = 0;
        let count = grades.length;
        for (i = 0; i < grades.length; i++) {
            let curNum = Number(grades[i]);
            sum += curNum;
        }
        avg = sum / count;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);

solve(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);