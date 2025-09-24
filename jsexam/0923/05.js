// 함수 호이스팅

console.log(func()); // (2) undefined 출력

function func() {
    console.log("func 실행"); // (1) func 실행 출력
}

// 중복 정의가 가능 - 주의해야 된다.
function func() {
    console.log("func 중복선언"); // func 중복선언이 출력
}

console.log("===================================");

const add = function (a, b) {
    console.log("add");
    return a+b;
}

let result = add(10, 20);
console.log(result); // 30

console.log("===================================");

// 화살표 함수
function func(a) {
    console.log("func: " + a);
}

func("func 실행");

const func2 = (a) => {
    console.log("func2: " + a);
}

func2("func2 실행");

// 화살표 함수 안에서의 this는 상위 스코프를 가리킨다.