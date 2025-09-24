const person = {
    name: "luna",
    job: {
        title: "student",
        manager: {
            name: "jeong",
        },
    },
};

function printManagerName(person) {
    console.log(person?.job?.manager?.name);
}

printManagerName(person); // jeong
printManagerName({ name:"kim" }); // undefined

const box = {
    name: "penBox",
    open() {
        console.log("This is a pen.");
    }
}

box.open();
const box2 = { name: "box" }; // This is a pen

box2.open?.(); // 실행은 안되지만 오류도 나지 않음

console.log(person?.["name"]); // luna

console.log({}?.["name"]); // undefined

