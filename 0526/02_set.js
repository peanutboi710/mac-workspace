const m = new Map();
m.set("a", 1234);
console.log(m);
m.set("a", 5678);
console.log(m);
// a라는 키는 중복이 안되지만, a에 들어가는 값은 중복될 수 있음

const s = new Set();
s.add(1234);
console.log(s);

s.add(1234);
console.log(s);

const mm = new Map(Object.entries({ a: "a"}));
console.log(mm);

const ss = new Set(["a", "a", "b", "b", "c", "c"]);
console.log(ss);

console.log(s.has(1234));
s.delete(1234)
console.log(s.has(1234));

s.add(1234);
s.add(12345);
s.add(123456);

for (const c of s) {
    console.log(c);
}

const o = {};
console.log("o.a", o.a);
const mmm = new Map();
console.log("mmm.get('a')", mmm.get("a"));

const oo = { a: 1234, b: 12345};
console.log(...Object.entries(oo));
const aa = ["a", "a", "a", "d", "d", "e"];
const sss = new Set(aa);
const aa2 = [...sss];
console.log(aa, aa2);