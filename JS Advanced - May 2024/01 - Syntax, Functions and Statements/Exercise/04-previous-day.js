function previousDay(year, month, date) {
  let fullDate = new Date(year, month - 1, date - 1);
  let newYear = fullDate.getFullYear();
  let newMonth = fullDate.getMonth() + 1;
  let newDay = fullDate.getDate();
  console.log(`${newYear}-${newMonth}-${newDay}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
previousDay(2024, 3, 1);
