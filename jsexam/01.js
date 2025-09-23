console.log("hi");

// 변수, 상수
// let, const (ES6에서 추가) 기존은 var
// 1. var - 중복 선언이 가능
//        - 호이스팅 된다
//        - 변수의 스코프가 함수 단위로 사용된다.

// 왜 ES6에서는 var를 지양하고, let/const를 추가했는지?
var v1 = 10;
var v1 = 20;
var v1 = 30;

// 중복 선언 되었을 때의 문제점

console.log("v2: " + v2); // 아래쪽에 v2가 선언이 되니까 오류가 나지는 않고 undefined가 나온다. - 호이스팅
var v2 = 20;

// console.log(v3); v3는 어디에도 선언된 적 없으므로 컴파일 오류

function varScopeTest() {
    if(true) {
        var varScope = 10;
    }
    console.log(varScope);
}

// let, const는 위의 var의 특징과 달리
// 1. 호이스팅 안됨
// 2. 변수의 스코프가 함수단위X -> 블록단위O
// 3. 중복 선언 안됨


// 자바는 강형언어 - 값에 따라서 타입이 달라진다.
// 자바스크립트는 약형언어 - 타입이 정해지지 않는다.

// console.log(value); 호이스팅 안되어서 컴파일 오류

let value = 1;
console.log("value: " + value);

value = 'aa'; // 값이 변경 된다
console.log("value: " + value);

// let value = 20; 한번 선언한 변수명으로 다시 선언 불가. 컴파일시부터 오류 발생.
var a = 1;
console.log("var a: " + a);

var a = 2; // var는 중복 정의 가능. 이런 부분 때문에 사용을 권장하지 않는다.

console.log("=====================================");

function letScopeTest() {
    if(true) {
        let letScope = 10;
        console.log("letScope: " + letScope);
    }
    // console.log(letScope); let은 블록단위라서 실행 안됨
}

letScopeTest();

console.log("=====================================");

const a = 10;
// a = 20; 상수라서 재할당 불가능. 나머지 특징은 let과 동일


