const age = 25;
if (age >= 20){
    console.log("adult");
}

const score = Math.random() * 100;
console.log(score);

if (score >= 70) {
    console.log ("pass");
}
else {
    console.log ("fail");
}

if (score >= 90) {
    console.log ("A");
}
else if (score >= 80) {
    console.log ("B");
}
else if (score >= 70) {
    console.log ("C");
}
else {
    console.log ("try again");
}
console.log("-----");
console.log(!!1);
console.log(!!-1);
console.log(!!0);
console.log(!![]);
console.log(!!{});
console.log(!!"");
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);
console.log(!!"0");
console.log(!!"0" * 1);

let a = 10;
a || console.log("a는 false 취급");

