let w = 0;
while (w<5) {
    console.log(w);
    w++;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === "c"){
        continue;
    }
    console.log(arr[i]);
    if (arr[i] === "e"){
        break;
    }
}

console.log("[역방향]");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

let w2 = arr.length -1;
while (w2 >= 0) {
    console.log(arr[w2]);
    w2--;
}
/*
for (;;){
    console.log("무한반복");
}
*/
