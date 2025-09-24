const user = {
    _name: "홍길동",
    _age: 25,
    get name() {
        console.log("name getter 호출");
        return this._name;
    }
}

// 사용
console.log(user.name); // 값을 읽는것 이므로 getter 호출 - 함수에 접근 한 것철머 보이지 않음
user.name = "홍길동2" // 값을 변경하는것 이므로 setter 호출 - setter가 정의되어있지 않으므로 안바뀜
user.age = -5; // 에러 

console.log(user._name); // 홍길동
user._name = "홍길동2";
console.log(user._name); // 홍길동2