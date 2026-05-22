
const program = {
    name: "부자로 만들어주는 로또 생성기",
    numbers: [],
    pickNumber() {
        console.log("Picking complete");
    },
};

console.log(`프로그램 이름 : ${program.name}`);
console.log(`프로그램이 뽑은 숫자 : ${program.numbers}`);
program.pickNumber();
program.language = "JS";
program.numbers = [1, 2, 3, 4, 5, 6];
console.log(program);


console.log(Object.keys(program));
console.log(Object.values(program));
console.log(Object.entries(program));