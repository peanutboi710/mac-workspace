const v = "속성명";
const v2 = "aa"
const o1 = {
    속성명: "값",
    속성명2: "값",
    myFun: function () {
        console.log("myFun");
    },
    myFun2() {
        console.log("myFun2");
    },
    myFun3() {
        console.log("myFun3");
    },
    [v]: "값",
};
console.log(o1);
o1.myFun();

function Student(name, major) {
    this.name = name;
    this.major = major;
    this.counrty = "Korea";
    this.hello = () => console.log("안녕");
}

const s1 = Student("Jane", "철학");
const s2 = new Student("Jane", "철학");
const s3 = new Student("Jane", "철학");
console.log("s1", s1);
console.log("s2", s2);
console.log("s3", s3);
Student.prototype.bye = function () {
    console.log("bye");
};
console.log("s3.hello === s2.hello", s3.hello);