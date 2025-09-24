const person = {
    name: '정다희',
    age: 35,
    city: '서울',
    isStudent: true
}

console.log("typeof person: " + typeof person);
console.log("person.name: " + person.name);
console.log('person["name"]: ' + person["name"]);

person.address = "경기도";

console.log(person); // { name: '정다희', age: 35, city: '서울', isStudent: true, address: '경기도' }


console.log("=========================================")

const dog = {
    name: '정뭉탱',
    age: 16,
    sound: "멍멍",
    say: function() {
        console.log(this.sound);
    },
    say2: () => {
        console.log(this.sound)
    }
}

console.log(dog);
console.log("dog.name: " + dog.name);
console.log('dog["age"]: ' + dog["age"]);
dog.say(); // "멍멍" -> 자기 자신의 객체를 가리킴. 브라우저에서 실행 시 [object Object]
dog.say2(); // undefined -> 상위 객체를 가리킴. 브라우저에서 실행 시 [object Window]

