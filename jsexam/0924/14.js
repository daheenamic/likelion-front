// forEach(함수) -- 요소를 하나씩 꺼내서 함수를 실행해주는 일
const array = [1, 2, 3, 4, 5];

const print = (number) => console.log(number);
array.forEach(print);

console.log("=================================")

array.forEach((number) => console.log(number));

console.log("=================================")

// array 배열의 요소에 (n * n) 한 결과 배열을 새로 만들고 싶다 [1, 4, 9, 16 ...]
const resultArr = [];
for (let i = 0; i < array.length; i++) {
    resultArr.push(array[i] * array[i]);
}

console.log(resultArr); // [ 1, 4, 9, 16, 25 ]

console.log("=================================");

// forEach를 사용하면?
const resultArr2 = [];

array.forEach((n) => {
    resultArr2.push(n * n);
})

console.log(resultArr2); // [ 1, 4, 9, 16, 25 ]

console.log("=================================");

// map을 사용한다면?
const resultArr3 = array.map((n) => n * n);
console.log(resultArr3); // [ 1, 4, 9, 16, 25 ]

console.log("=================================");

// filter - 참(조건에 맞는 것)인 것만 담아서 리턴. (필터링, 조건선별)
const resultArr4 = array.filter((n) => n % 2 == 0);
console.log(resultArr4); // [ 2, 4 ]

console.log("=================================");

// reduce
let sum = array.reduce((acc, cur) => {
    console.log(acc + " :: " + cur)
    return acc + cur;
}, 0);

console.log("sum= " + sum); // 15