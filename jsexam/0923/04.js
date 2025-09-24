// 자바스크립트는 함수를 일급 객체로 취급한다.
// 함수도 타입이 될 수 있다. 타입이 된다라는 것은 매개변수로도 가능하고 리턴값으로도 사용 가능하다.

function test() {
    console.log("hi");
}

console.log(typeof test); // function

function func(abc) {
    return abc;
}

function func2() {
    return 20;
}

function func3() {
    return func(30);
}

let value = 10;
let result = func(value);
console.log(result); // 10
console.log(typeof result); // number

let result2 = func(func2()); // 매개변수로 함수도 가능
console.log(result2); // 20

let result3 = func(func3()); // 리턴값을 함수
console.log(result3); // 30
console.log(typeof result3); // number

let result4 = func(func3); // 괄호 없이 함수를 전달
console.log(result4); // [Function: func3]
console.log(typeof result4) // function

