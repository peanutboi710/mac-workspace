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


for (const c of map) {

}