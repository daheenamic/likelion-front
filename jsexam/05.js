// 함수 호이스팅

console.log(func()); // (2) undefined 출력

function func() {
    console.log("func 실행"); // (1) func 실행 출력
}

// 중복 정의가 가능 - 주의해야 된다.
function func() {
    console.log("func 중복선언"); // func 중복선언이 출력
}

