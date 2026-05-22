
const arr = [1, 2, 3, 4, 5];

arr.push(11);
console.log(arr);
console.log(Object.keys(arr));

const p = arr.pop();
console.log(p);
console.log(arr);

arr.unshift("a");
console.log(arr);
console.log(Object.keys(arr));

const s = arr.shift();
console.log(s);
console.log(arr);

console.log(arr.splice(1, 2));
console.log(arr);