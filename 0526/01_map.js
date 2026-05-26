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
for (const c of map) {
    
}