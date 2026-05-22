
const obj = {name: "James", age: "20", job: "fighter"};
const {name, age, job} = obj;

console.log('이름 : ${name}');
console.log('나이 : ${age}');
console.log('직업 : ${job}');
function f() {
    return {
        name: "John",
    };
}

const {name:personName} = obj;
const {name:personName2} = f();
console.log(personName);
console.log(personName2);

const { salary, pet = "cat", name: name2, ...rest} =obj;

console.log(salary);
console.log(pet);
console.log(name2);
console.log(rest);

const obj2 = obj;
console.log(obj2);
obj["name"] = "James2";
console.log(obj2);
const obj3 = {...obj};
const {...obj4} = obj;
obj["name"] = "James3";
console.log(obj3, obj4);

console.log("obj === obj2", obj === obj2);
console.log("obj === obj3", obj === obj3);

const arr = [1, 2, 3, 4, 5];
const [a1, a2, ...a5] = arr;
console.log(a1, a2, ...a5);
const [a6] = arr;
console.log(a6);
const [, , , , , a7] = arr;
console.log(a7);

let i =0;
let j = 100;
console.log (i, j);
[i, j] = [j, i];
console.log (i, j);

