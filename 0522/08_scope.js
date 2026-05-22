console.log(v1);
let v3 = "Im outsider let!"
console.log(v3);

{
    console.log("I'm block!");
    var v1 = 'Im var!';
    let v2 = 'Im let!';
    v3 = "Im inside let...";
}
console.log(v1);
// console.log(v2); >> error
console.log(v3);

for (let i = 0; i < 5 ; i++) {
    console.log(i);
}

var vv2 = "Im free~";
function f1(){
    var vv1 = "I wanna freedom~";
    vv2 = "not now..."
    let l = 1;
    const c =1;
}

f1();
// console.log(vv1); >> error
console.log(vv2);