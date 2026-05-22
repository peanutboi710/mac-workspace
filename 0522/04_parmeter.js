
function f1(a, b, c){
    console.log(a*2, b*2, c*2);
}

f1();
f1(1, 2);
f1(1, 2, 3);
f1(1, 2, 3, 4);

function f2(a = 120, b = 150) {
    return a * b;
}
console.log(f2());
console.log(f2(100));

function f3() {
    console.log(arguments);
}
f3();
f3(1,2,3,4,5);

function f4(a, ...b) {
    console.log("a", a);
    console.log("b", b);
}
f4(1);
f4(1, 2);
f4(1, 2, 3, 4, 5, 6, 7);

function f5(props) {
    if (props.a) {
        console.log("props.a", props.a);
    }
    console.log("props.b", props.b || "없음");
    console.log("props.c", props.c);
}
f5({});
f5({ a:10 });