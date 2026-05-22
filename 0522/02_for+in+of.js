const arr = ["a", "b", "c", "d", "e", "f"];
for (const key in arr){
    console.log(key, arr[key]);
}

const obj = {
    name: "James",
    job: "fighter"
};
for (const key in obj){
    console.log(key, obj[key]);
}

for (const v of arr) {
    console.log(v);
}

for (const v of Array.from(obj)) {
    console.log(v);
}