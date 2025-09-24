// forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});
// 2, 4, 6, 8, 10

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);  // 15

const avg = numbers.reduce((acc, cur, idx, arr) => {
    if (idx === arr.length - 1) {
        return (acc + cur) / arr.length;
    }
    return acc + cur;
}, 0);
console.log(avg);  // 3