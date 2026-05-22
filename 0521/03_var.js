name = "윌리엄";
console.log(name);

let foo; // 선언
foo = 1; // 할당
let bar = 10;   // 선언+할당 > 초기화
console.log(foo);
console.log(bar);

foo = 100;
console.log(foo); // 재할당

let love;
console.log(love); // 선언만 있고 할당이 없으면 undefined

const a = 111;
console.log(a);

let o = { name: "Charles", age: 20 };
console.log(o.name);
o = 10;
console.log(o.name); // undefined

v = 1000;
var v = 100;
var v;
console.log(v);
