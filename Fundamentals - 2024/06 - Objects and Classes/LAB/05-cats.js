function cats(input) {
    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            let says = 'says Meow';
            return says;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let [name, age] = input[i].split(' ');
        let cat = new Cats(name, Number(age));
        let catValue = Object.values(cat);
        [name, age] = catValue;
        console.log(`${name}, age ${age} ${cat.meow()}`);
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);