function phoneBook(input) {
    let phoneBook = {};
    for (let personInfo of input) {
        let [name, phone] = personInfo.split(' ');
        phoneBook[name] = phone;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
// phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);