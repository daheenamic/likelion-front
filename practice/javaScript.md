# 자바 vs 자바스크립트 문법 차이

## 1. var, let, const의 차이
- **var**
  - 함수 스코프(function scope) → 블록을 무시
  - 중복 선언 가능 → 버그 유발 가능 → 에측하기 어려움
- **let**
  - 블록 스코프(block scope)
  - 중복 선언 불가
  - 자바의 로컬 변수와 비슷하게 생각할 수 있음
- **const**
  - 블록 스코프(block scope)
  - 재할당 불가 (상수처럼 사용)
  - 객체/배열은 참조 자체만 불변 → 내부 값은 변경 가능

### 코드 예시

```javascript
// var 예시
var x = 1;
var x = 2;  // 허용됨
console.log(x); // 2

// let 예시
let y = 1;
// let y = 2; // 오류 발생: 중복 선언 불가

// const 예시
const z = 3;
// z = 4; // 오류 발생: 재할당 불가
```

- 👉 오늘날 var는 예측 불가능한 동작 때문에 거의 사용하지 않고, let과 const가 표준.

***

## 2. Class 기반 (Java) vs Prototype 기반 (JavaScript)

### 자바(클래스 기반 OOP)
```java
class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound(); // Bark
    }
}
````

- 클래스를 정의 -> 객체 생성 -> 상속 구조로 확장
- 객체 지향의 전통적 접근 방식

### 자바스크립트 (프로토타입 기반 OOP)
```javascript
function Animal() {}
Animal.prototype.sound = function() {
  console.log("Some sound");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype); // 프로토타입 상속
Dog.prototype.sound = function() {
  console.log("Bark");
};

const d = new Dog();
d.sound(); // Bark
```

- prototype이라는 공용 창고를 두고, 필요한 메서드를 그 창고에서 찾아 쓴다.
- new Dog()를 하면 Dog객체 안에 메서드가 복사되는게 아님
- Dog.prototype을 링크로 따라가서 sound() 같은 기능을 실행함.
- 여러 객체가 하나의 메서드를 공유하기 때문에 메모리도 절약되고 동작도 유연해짐

### ES6 class 버전

```javascript
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  sound() {   // 부모 메서드 오버라이드
    console.log("Bark");
  }
}

const d = new Dog();
d.sound(); // Bark
```

- 함수(생성자) + prototype으로 상속 구현
- ES6 이후 class 문법 도입 → 가독성을 높여서 자바와 비슷하게 보이지만, 내부적으로는 여전히 프로토타입

```text
[클래스 설계도]
     |
   new
     ↓
[Dog 객체]  <-- 자기만의 메서드 복사본 있음
[Cat 객체]  <-- 자기만의 메서드 복사본 있음
```

```text
[Dog 객체]  ---링크---> Dog.prototype
                         |
                         └--링크---> Animal.prototype
                                         |
                                         └--링크---> Object.prototype

[Cat 객체]  ---링크---> Cat.prototype
                         |
                         └--링크---> Animal.prototype
                                         |
                                         └--링크---> Object.prototype
```



***

## 3. 변수 스코프 차이

### 자바 (블록 스코프)
```java
public class Main {
    public static void main(String[] args) {
        if (true) {
            int a = 10;
            System.out.println(a); // 10
        }
        // System.out.println(a); // 오류: 블록 밖에서 접근 불가
    }
}
```

- { } 블록 단위로 변수 생존 범위 결정

### 자바스크립트 (함수 스코프 vs 블록 스코프)
```javascript
function test() {
  if (true) {
    var x = 10; // 함수 스코프
    let y = 20; // 블록 스코프
    const z = 30; // 블록 스코프
  }
  console.log(x); // 10 (var는 함수 전체에서 유효)
  // console.log(y); // 오류 (블록 밖 접근 불가)
  // console.log(z); // 오류 (블록 밖 접근 불가)
}
test();
```

- 👉 var는 블록을 무시하고 함수 전체에서 유효 → 버그 원인
- 👉 let, const는 자바와 비슷하게 블록 단위로 관리 → 안전