try{
const a = null;
a.a = 1
console.log("a");
} catch {
    console.log("error");
}

try{
const a = null;
a.a = 1
console.log("a");
} catch(e) {
    console.log(e);
    console.error(e);
}

try {
    const r = Math.random();
    if (r >= 0.5) {
        r = 100;
    }
    else {
        console.log(a);
    }
} catch (e) {
//    console.log(e);
    console.log(typeof e);
    if (e instanceof TypeError){
        console.log("tpye error");
    } else if (e instanceof ReferenceError) {
        console.log("reference error");
    } else {
        console.log("unknown error");
    }
}