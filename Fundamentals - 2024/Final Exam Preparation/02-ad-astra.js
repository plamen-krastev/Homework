function adAstra(data) {
    let pattern = /([||#])(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{1,5})\1/g;
    let str = data[0];
    let foods = [];
    let totalCalories = 0;
    let exec;
    while ((exec = pattern.exec(str)) !== null) {
        let curCalories = Number(exec.groups.kcal);
        totalCalories += curCalories;
        let food = {
            item: exec.groups.product,
            expirationDate: exec.groups.date,
            calories: exec.groups.kcal
        };
        foods.push(food);
    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    for (let food of foods) {
        console.log(
            `Item: ${food.item}, Best before: ${food.expirationDate}, Nutrition: ${food.calories}`
        );
    }
}

// adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|' + '500||Not right|6.8.20|5|']);

// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21' + '#9000#^#@aswe|Milk|05/09/20|2000|']);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
