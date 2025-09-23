//// 스프레드 연산자 (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log([arr1, arr2]); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

console.log(arr1); // [ 1, 2, 3 ]
console.log(...arr1); // 1 2 3

const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
console.log(combined); // [ 1, 2, 3, 4, 5, 6 ]

console.log("===================");

// 배열 복사
const original = [1, 2, 3];
const copy = [...original]; // 새로운 배열 생성

original.push(4);

console.log(original); // [ 1, 2, 3, 4 ]
console.log(copy);  // [ 1, 2, 3 ]

console.log("===================");

// 배열 구조분해 할당
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest);  // [ 3, 4, 5 ]




