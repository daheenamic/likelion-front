let oldname = "luna";
let newname = "mei";

if(newname) { oldname = newname; }
newname && (oldname = newname);
newname &&= oldname;

// 위의 세 코드는 모두 같은 일을 한다

const person = {
    name: "" ,
    age: 0
}

person.age ||= 30;
person.name ||= "luna";

console.log(person); // { name: 'luna', age: 30 }

function makePerson(obj) {
    obj.name ??= "Guest";
    obj.age ??= 20;
    return obj;
}

console.log(makePerson({})); // { name: 'Guest', age: 20 }
console.log(makePerson({ name: "mei" })); // { name: 'mei', age: 20 }
console.log(makePerson(person)); // { name: 'luna', age: 30 }
