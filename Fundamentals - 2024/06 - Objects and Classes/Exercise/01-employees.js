function employees(input) {
    let employeesInfo = {};
    for (let employee of input) {
        employeesInfo['name'] = employee;
        employeesInfo['personalNumber'] = employee.length;
        console.log(
            `Name: ${employeesInfo['name']} -- Personal Number: ${employeesInfo['personalNumber']}`
        );
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);