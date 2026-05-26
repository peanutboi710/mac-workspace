const o = {};
o.a = "a";
o.b = "b";
o["c d"] = "c d";
console.log(o);
o["e"] = function () {
    console.log("e");
};
console.log(o);

const map = new Map(); // new - 생성자 -> Map()

o["aa"] = 1234;
o.bb =12345;

map.set("aa", 1234);
map.set("bb", 12345);

console.log(map);
console.log(map.get("aa"));

console.log('"aa" in o', "aa" in o)
console.log('"cc" in o', "cc" in o)

console.log(map.has("aa"));
console.log(map.has("cc"));

console.log(map);

for (const c of Object.entries(o)) {
    console.log(c);
}

console.log(map.entries());
console.log(map.keys());
console.log(map.values());

for (const c of map) {
    console.log(c);
}

console.log(Object.values(o).length);
console.log(map.size);

const m = new Map();
m.set("counter", 0);
if (m.has("counter") && typeof m.get("counter") == "number") {
    m.set("counter", m.get("counter") + 1);
} else {
    m.set("counter", 0);
}
console.log(m);

//

const mm = new Map();
[].map()
