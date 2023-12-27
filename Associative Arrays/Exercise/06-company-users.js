function solve(arr) {

    let companyInfo = {};

    for (let company of arr) {

        let [companyName, employeeID] = company.split(' -> ');

        if (companyName in companyInfo) {
            companyInfo[companyName].push(employeeID);
        } else {
            companyInfo[companyName] = [employeeID];
        }
    }

    let entries = Object.entries(companyInfo);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employeeIDs] of entries) {
        let uniqueEmployeeIDs = new Set(employeeIDs); // unique value
        console.log(company);
        for (let employeeID of uniqueEmployeeIDs) {
            console.log(`-- ${employeeID}`);
        }
    }
}

// solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);

solve(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);