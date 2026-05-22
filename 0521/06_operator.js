console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(5%3); // mod 연산
console.log(30 - 5 * 3);
console.log((30 - 5) * 3);

let a = 0;
a =+ 10;
console.log(a);

console.log(100 == 10);
console.log(100 >= 10);
console.log(10 >= 10);
console.log(100 <= 10);
console.log(10 <= 10);
console.log(100 != 10);
console.log("100 != 10", 100 != 10);
console.log("dog" == "cat");
console.log("dog" == "dog");
console.log('"dog" == "dog"', "dog" == "dog"); // 문자열은 ''을 이용한다

console.log(1 + "1"); // 11
console.log("1" + 1); // 11
console.log(2 * "2") // 4
// +를 제외한 나머지 연산들은 숫자로 자동변환
console.log(1 == "1"); // true
// 일치 연산자 (형 변환을 하지 않는다)
console.log(1 === "1"); // false
console.log(1 !== "1");

console.log(0 == "");
console.log("" == 0);
console.log("" == "0");

// 논리 연산자
// &&(and) ||(or) !(not)
console.log("---------");
const b1 = 100 > 10;
console.log(b1);
console.log(!b1);

const b2 = 50 < 20;
console.log(b2);
console.log(b1 && b2); // b1, b2 가 true
console.log(b1 || b2); // b1, b2 중 하나만 true

// a || b 에서 a가 true면 b는 신경안쓴다
// a && b 에서 b가? 

let x = 1;
x++; // x+=1;
console.log(x); // 2
x--; // x-=1;
console.log(x); // 1
console.log(x++); // 2? 1! , x++ 이 먼저 호출되고 x가 대입되기 때문
console.log(++x); // 3, 이렇게 해야 순서대로
