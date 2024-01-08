function reading(pages, perHour, days) {

    let timeToReadABook = pages / perHour;
    let hoursPerDay = timeToReadABook / days;
    console.log(hoursPerDay);

}

reading (212, 20, 2);
reading(432, 15, 4);