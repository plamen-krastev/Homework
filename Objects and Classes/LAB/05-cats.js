function cats(arr) {

    // let cat = {};
    // for (i = 0; i < arr.length; i++) {
    //     let cur = arr[i].split(' ');

    //     cat.name = cur[0];
    //     cat.age = Number(cur[1]);
    //     cat.meow = () => console.log(`${cat.name}, age ${cat.age} says Meow`);

    //     cat.meow();
    // }

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        speak() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (i = 0; i < arr.length; i++) {
        let cur = arr[i].split(' ');
        let cat = new Cat(cur[0], Number(cur[1]));
        cat.speak();
    }

}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);