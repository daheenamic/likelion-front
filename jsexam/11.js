const array = [];

console.log(typeof array); // object

const fruits = ["사과", "바나나", "딸기"];
console.log(fruits); // [ '사과', '바나나', '딸기' ]

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5];

numbers[0] = 100;
console.log(numbers); // [ 100, 2, 3, 4, 5 ]
console.log(numbers.length); // 5

const mixed = [1, "3", "hello", true, null];
console.log(mixed); // [ 1, '3', 'hello', true, null ]


