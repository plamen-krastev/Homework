function solve(input) {

    let companyInfo = {};
    for (let token of input) {
        let [company, employee] = token.split(' -> ');
        if (!companyInfo.hasOwnProperty(company)) {
            companyInfo[company] = [employee];
        } else {
            if (!companyInfo[company].includes(employee)) {
                companyInfo[company].push(employee);
            }
        }
    }

    let result = Object
        .entries(companyInfo)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of result) {
        console.log(company);
        employees.forEach(employee => console.log(`-- ${employee}`));

    }
}

// solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);

solve( ['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);