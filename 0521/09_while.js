let n = 0;
while (n <10){
    n+=2;
    console.log(n);

}

while (true) {
    if (Math.random() > 0.5) {
        console.log("head");
        break;
    } else {
        console.log("tail");
    }
}

let w = 0;
while (w<10){
    w++;
    if (w%2 == 0){
        continue;

    }
    console.log(w, "odd");
}