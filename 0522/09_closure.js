
const v = "global"

function f1(){
    console.log(v);
}
f1();

function f2(){
    const v = "local";
    f1();
}
f2();

function f3(){
    let c = 0;
    return function (){
        return ++c;
    };
}

f3();
f3()();
const counter = f3();
console.log(counter());
console.log(counter());
