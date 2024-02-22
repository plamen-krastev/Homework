function personalInfo(firstName, lastName, age) {
    let person = {}
    person['firstName'] = firstName;
    person.lastName = lastName;
    person['age'] = age;

    return person;
    // console.log(person);
}

personalInfo("Peter", "Pan", "20");
personalInfo("George", "Smith", "18");