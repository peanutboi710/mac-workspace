let a = 0;
function myFun() {
    a++;
    let b = 0;
    return b;
}
myFun();
console.log(a);

console.log(myFun());
const c = myFun();
console.log(c);

function fun2(a) {
    return a * 2;
}
console.log(fun2(100));
