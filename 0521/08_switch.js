
const fruits = ["apple", "banana", "peach"];

switch (fruits[Math.floor(Math.random)]) {
    case "apple":
        console.log("I love apple");
        break;
    case "banana":
        console.log("I love banana");
        break;
    case "peach":
        console.log("I love peach");
        break;
    default:
        console.log("I hate fruits");
        break;
}