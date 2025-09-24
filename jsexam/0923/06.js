function func(a) {
    console.log("a + a");
    return a + a;
}

function func(a, b) {
    console.log("a + b");
    console.log("arg lengh: " + arguments.length);  
    console.log("arg[2]: " + arguments[2]); // 30
    return a + b;
}

let result = func(10);
console.log("result: " + result);

console.log("func(10, 20): " + func(10, 20)); // 30

console.log("func(10, 20, 30): " + func(10, 20, 30)); // 30

// 1. 오버로딩은 되지 않는다.
// 2. 매개변수 갯수가 달라도 오류 발생하지 않음
// 3. arguments라는 배열을 제공해서 여기에 넣어서 쓸 수 있게 해줌