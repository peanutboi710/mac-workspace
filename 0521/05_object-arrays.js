const a1 = "apple";
const a2 = "banana";
const a3 = "watermelon";
console.log(a1, a2, a3);

const fruits = ["apple", "banana", "watermelon"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "peach";
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

// Object
const o = {
    key: "value",
    true: "",
    hello: "hello",
    1: 100,
    "1 1": "12345"
};
console.log(o.true);
console.log(o.key);
console.log(o.hello);
console.log(o[1]);
console.log(o["1 1"]);