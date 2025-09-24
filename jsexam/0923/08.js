const user = {
    username: "john",
    email: "john@email.com",
    age: 30,
}

const user2 = {
    username2: "luna",
    email2: "luna@email.com",
    age2: 32,
};

// const username = user.username;
// const email = user.email;
// const age = user.age;

// 구조 분해 할당
const {username, email, age} = user;
console.log(username); // john

// 순서나 갯수가 중요하지 않다.
const {age2, username2} = user2;
console.log(username2); // luna

function print(person) {
    const text = `${person.username}의 나이는 ${person.age}세, 이메일은 ${person.email} 입니다.`;
    console.log(text);
}

print(user);

function print2({username2, age2, email2}) {
    const text2 = `${username2}의 나이는 ${age2}세, 이메일은 ${email2} 입니다.`;
    console.log(text2);
}

print2(user2);