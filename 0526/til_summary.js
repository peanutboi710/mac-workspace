/**
 * 2026-05-26 JavaScript 핵심 개념 종합 요약 및 실습 코드
 * 
 * [목차]
 * 1. 자료구조 확장 (Map & Set)
 * 2. 배열의 고차 함수 (Higher-Order Functions) & Gotchas
 * 3. 값 복사 유형 (Shallow Copy vs Deep Copy)
 * 4. 객체 지향과 프로토타입 (OOP & Prototype)
 * 5. 모던 클래스 문법과 상속 (Class & Inheritance)
 * 6. 예외 처리와 에러 객체 (Exception Handling) & finally의 함정
 */

console.log("=== [1] 자료구조 확장 (Map & Set) ===");
// 1. Map: 다양한 타입의 키 지원 및 편리한 API
const map = new Map();
map.set("aa", 1234);
map.set(42, "정답");
console.log("Map 조회:", map.get("aa"), map.get(42));
console.log("Map 크기 조회(size):", map.size);
console.log("aa 키 존재 여부(has):", map.has("aa"));

// 2. Set: 중복 불허 집합 자료구조 & 배열 중복 제거 꿀팁
const duplicates = ["a", "a", "b", "b", "c", "c"];
const uniqueSet = new Set(duplicates);
const uniqueArray = [...uniqueSet]; // Spread 연산자로 다시 배열화
console.log("원본 배열:", duplicates);
console.log("중복 제거된 배열:", uniqueArray);
console.log("\n");


console.log("=== [2] 배열의 고차 함수 & Gotchas ===");
const numbers = [1, 5, 13, 8, 3];

// ⚠️ Gotcha 1: sort()의 기본 정렬은 '사전식' 정렬이다!
console.log("잘못된 기본 sort():", [...numbers].sort()); // [1, 13, 3, 5, 8]

// 해결책: 비교 함수 전달
const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);
console.log("오름차순 정렬:", ascending);
console.log("내림차순 정렬:", descending);

// ⚠️ Gotcha 2: forEach(console.log)의 예상치 못한 전달 인자
console.log("--- forEach(console.log) 직접 전달 시 ---");
// console.log에 (value, index, array)가 모두 넘어가 한 줄씩 여러 인자가 출력됨
numbers.slice(0, 2).forEach(console.log); 

console.log("--- (v) => console.log(v) 화살표 함수 활용 ---");
numbers.slice(0, 2).forEach((v) => console.log(v)); // 깔끔하게 값만 출력

// 3. 체이닝(Chaining)을 통한 선언적 가공
const names = ["Bob", "alice", "jAin", "Tom"];
const processedNames = names
    .map(v => v.toLowerCase())
    .filter(v => v[0] === 'a' || v[0] === 'b')
    .filter(v => v.length <= 3);
console.log("가공된 이름 목록:", processedNames); // ['bob', 'ali'] (alice는 길이 > 3이라 제외)
console.log("\n");


console.log("=== [3] 값 복사 유형 (Shallow Copy vs Deep Copy) ===");
const originalObj = { a: 1, b: { c: 1234 } };

// 1. 얕은 복사 (Shallow Copy)
const shallowCopy = { ...originalObj };
originalObj.b.c = 9999; // 내부 중첩 객체를 수정
console.log("얕은 복사본 상태 (동일 주소 공유로 함께 변함):", shallowCopy.b.c); // 9999

// 2. 깊은 복사 (Deep Copy)
originalObj.b.c = 1234; // 원상복구
const deepCopy = structuredClone(originalObj); // 표준 깊은 복사 API
originalObj.b.c = 8888;
console.log("원본 객체 수정 후 오리지널:", originalObj.b.c); // 8888
console.log("깊은 복사본 상태 (영향을 받지 않음):", deepCopy.b.c); // 1234
console.log("\n");


console.log("=== [4] 객체 지향과 프로토타입 (OOP & Prototype) ===");
// 생성자 함수 설계
function Student(name, major) {
    this.name = name;
    this.major = major;
    // 인스턴스마다 독립 생성되는 메서드 (메모리 낭비 유발)
    this.hello = () => console.log(`안녕, 나는 ${this.name}이야.`);
}

// 프로토타입에 메서드 정의 (공동 공유로 메모리 절약)
Student.prototype.bye = function() {
    console.log(`${this.name}: 다음에 봐!`);
};

const studentA = new Student("민수", "컴공");
const studentB = new Student("영희", "디자인");

console.log("hello 메서드 공유 여부 (False):", studentA.hello === studentB.hello);
console.log("bye 메서드 공유 여부 (True):", studentA.bye === studentB.bye);
studentA.hello();
studentB.bye();
console.log("\n");


console.log("=== [5] 모던 클래스 문법과 상속 (Class & Inheritance) ===");
class Animal {
    #name; // Private 필드
    static count = 0; // Static 필드

    constructor(name) {
        this.#name = name;
        Animal.count++;
    }

    speak() {
        console.log(`[부모] 내 이름은 ${this.#name}입니다.`);
    }
}

class Cat extends Animal {
    #age;
    constructor(name, age) {
        super(name); // 부모 생성자 호출 필수!
        this.#age = age;
    }

    speak() {
        super.speak(); // 부모 메서드 활용
        console.log(`[자식] 야옹~ 나는 ${this.#age}살이다옹.`); // 오버라이딩 추가 동작
    }
}

const cat = new Cat("나비", 3);
cat.speak();
console.log("동물 누적 수 (Static):", Animal.count);
console.log("\n");


console.log("=== [6] 예외 처리와 에러 객체 (Exception Handling) ===");
// 1. instanceof를 이용한 에러 타입별 분기 처리
try {
    const constVal = 10;
    constVal = 20; // TypeError 발생
} catch (e) {
    if (e instanceof TypeError) {
        console.log("잡았다! TypeError 처리 완료");
    } else if (e instanceof ReferenceError) {
        console.log("잡았다! ReferenceError 처리 완료");
    }
}

// ⚠️ Gotcha: finally 안에서의 return은 독약이다!
function checkFinallyGotcha() {
    try {
        throw new Error("에러 발생!");
        return "TRY 성공";
    } catch (e) {
        return "CATCH 처리";
    } finally {
        // 원래 에러나 이전 return문들을 모두 삼켜버리고 강제 복귀시킴
        return "FINALLY 가로채기"; 
    }
}
console.log("finally return 호출 결과:", checkFinallyGotcha()); // "FINALLY 가로채기" 출력
console.log("※ 결론: finally 블록 내에서는 return 작성을 절대 지양합시다.");
