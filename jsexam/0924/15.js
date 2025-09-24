//find
const users = [
    {id: 1, name: '김철수'},
    {id: 2, name: '이영희'},
    {id: 3, name: '박민수'}
];

const user = users.find(u => u.id === 2);
console.log(user);

