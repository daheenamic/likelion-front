// 단축평가 = 논리 연산자가 앞의 값으로 결과가 확정되면 뒤는 실행하지 않는 방식.
// A && B : A가 false면, B를 확인할 필요 없이 전체 결과는 false.
// A || B : A가 true면, B를 확인할 필요 없이 전체 결과는 true.

// AND (&&) 예시
const isLoggedIn = true;
const username = "luna";

isLoggedIn && console.log(username); //
// isLoggedIn이 true이므로 console.log 실행
// 만약 false였다면 console.log는 아예 실행 안 됨

// OR (||) 예시
const inputName = "";
const defaultName = "Guest";

const name = inputName || defaultName;
console.log(name); // Guest
// inputName이 falsy("") → defaultName 반환