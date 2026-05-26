const a = [1, 5, 13, 8, 3];
// 정렬한다 -> for문?
console.log(a);
console.log(a.sort());
console.log(a);

function compare(a, b) {
    return a - b;
}
const compare2 = function (a, b) {
    return b - a;
};

console.log(a.sort(compare));
console.log(a.sort(compare2));

console.log(
    a.sort(function (a, b) {
        return a-b;
    })
);

console.log(a.sort((a, b) => b - a));

const a2 = [1, -3, 5, -19, 7];
console.log(a2.sort((a,b) => Math.abs(a) - Math.abs(b)));

a2.forEach(console.log);

a2.forEach((v) => console.log(v));


console.log(a2);
console.log(a2.map((v) => Math.abs(v)));
console.log(a2.map(Math.abs));
console.log(a2);

console.log(a2.filter((v) => v % 2 == 0));
console.log(a2.filter((v) => v % 3 == 0));
console.log(a2.filter((_ , i) => i !== 0 && i % 3 == 0));

const a4 = [1, 3, 5, 7, 9];

let sum = 0;
for (const v of a4) {
    sum += v;
}
console.log(sum);