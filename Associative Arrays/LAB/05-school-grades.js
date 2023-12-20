function solve(arr) {
    let students = {};

    for (let row of arr) {
        // split array:
        let student = row.split(' ');
        // get student name:
        let studentName = student.shift();
        // to get all grades as string:
        let numAsString = '';

        for (let num of student) {
            numAsString += num;
        }

        if (students.hasOwnProperty(studentName)) {
            students[studentName] += numAsString;
        } else {
            students[studentName] = numAsString;
        }

    }
    // convert to array:
    let entries = Object.entries(students);

    // sort array:
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    // sorted array to object:
    students = Object.fromEntries(entries);

    // calculating average grade
    let avrGrade = 0;
    for (let item of entries) {
        let sum = 0;
        let grades = item[1];
        for (let i = 0; i < grades.length; i++) {
            sum += Number(grades[i]);
        }
        avrGrade = (sum / grades.length).toFixed(2);
        students[item[0]] = avrGrade;
    }

    for (let [student, grade] of Object.entries(students)) {
        console.log(`${student}: ${grade}`);
    }
}


solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);

solve(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);