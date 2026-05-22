
(function () {
    console.log("I am");
})();

const f = function (fn) {
    fn();
    console.log("I am 2");
};

f(function (){
    console.log("Who I am");
});

a();
function a() {
    console.log("Live yourself");
}

(function () {})

const af = () => 0;
af();
console.log(af());

const af2 = (a) => console.log(a);
af2(1);
console.log(af2(1));

const af3 = (a) => {
    a++;
    a += 2;
    return 0;
};
console.log(af3(1));