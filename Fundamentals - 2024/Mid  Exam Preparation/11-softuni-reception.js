function solve(input) {

    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);
    let student = Number(input[3]);

    let totalStudentPerHour = employee1 + employee2 + employee3;
    let hours = 0;

    while (student > 0) {
        student -= totalStudentPerHour;
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

solve(['5','6','4','20']);
solve(['1','2','3','45']);
solve(['3','2','5','40']);