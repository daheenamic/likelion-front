// 객체 생성자 함수
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function () {
        console.log(this.sound);
    };
}

const dog = new Animal('강아지', '뭉탱이', '멍멍');

dog.say(); // 멍멍
console.log(dog.name); // 뭉탱이

const cat = new Animal('고양이', '짱고', '야옹');

cat.say(); // 야옹
cat.say = function() { console.log('야오옹') };
cat.say(); // 야오옹
dog.say(); // 멍멍 - '야오옹'을 변경해도 dog에 영향을 주지 않음.
