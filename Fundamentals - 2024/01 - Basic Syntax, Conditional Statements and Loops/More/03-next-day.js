function solve(year, month, day) {

    const nextDay = new Date(year, month - 1, day + 1);

    let theYear = nextDay.getFullYear();
    let theMonth = nextDay.getMonth();
    let theDay = nextDay.getDate();

    console.log(`${theYear}-${theMonth + 1}-${theDay}`);
}

solve(2016, 9, 30);
solve(2020, 3, 24);