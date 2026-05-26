class Animal {
    count = 0;
    static count = 0;
    #name;
    constructor(name) {
        this.#name = name;
        this.count++
        Animal.count++
    }
    speak() {
        console.log(this.#name);
    }
}
class Cat extends Animal {
    #age;
    constructor(name, age) {
        super(name);
        this.#age = age;
    }
    speak() {
        super.speak();
        console.log(`나는 ${this.#age}살이다옹`);
    }
}

const a = new Animal("기니피그");
const b = new Cat("나폴레옹");
const c = new Cat("나비", 3);

a.speak();
b.speak();
c.speak();
console.log("a.count", a.count);
console.log("b.count", b.count);