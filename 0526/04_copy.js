const a = { b: { c: 1234 } };

const b = a;
a["d"] = 5678;
console.log(a, b);

const c = {...a};
a["e"] = 8765;
console.log(a, b, c);

a["b"]["f"] = "abcd";
console.log(a, b, c);

const jsonStr = JSON.stringify(a);
const jsonObj = JSON.stringify(jsonStr);

console.log(jsonObj);
a["b"]["g"] = true;
console.log(a, b, c, "jsonObj", jsonObj);

const s = structuredClone(a);
a["b"]["h"] = null;

console.log(a, b, c, "jsonObj", jsonObj, "s", s);
