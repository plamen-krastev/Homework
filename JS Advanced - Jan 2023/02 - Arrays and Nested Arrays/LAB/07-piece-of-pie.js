function solve(arr, flavor1, flavor2) {

    let firstIndex = arr.indexOf(flavor1);
    let lastIndex = arr.indexOf(flavor2);

    let result = arr.slice(firstIndex, lastIndex + 1);
    return result;
}

console.log(solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));

// console.log(solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie' ));