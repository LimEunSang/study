# 자료형과 형 변환

## 템플릿 리터럴
```js
let name = "winterlood";
let name2 = "이정환";
let name3 = `${name} ${name2}`; // 템플릿 리터럴!! name3 = "winterlood 이정환"
console.log(name3);
```

# 연산자

## 논리 연산자
```js
let compareA = 1 == "1"; // == : 값만 비교
console.log(compareA); // true

let compareB = 1 === "1"; // === : 자료형도 비교
console.log(compareB); // false
```

## null 병합 연산자
```js
let a;
a = a ?? 10; // null 병합 연산자
console.log(a);
```

# 함수표현식 & 화살표 함수
```js
let hello = function () {
  return "하이?";
}; // 함수 표현식, 선언 전에 호출 불가능

let fight = () => "싸우자"; // 화살표 함수, 함수 표현식이랑 같은 기능

function bye() {
  return "바이";
} // 함수 선언식, 선언 전에 호출할 수 있음(호이스팅?)

const helloText = hello();
const byeText = bye();
const fightText = fight();

console.log(helloText);
console.log(byeText);
console.log(fightText);
```

# 객체
객체의 생성, 프로퍼티 접근 방법, 추가/수정/삭제
```js
// let person = new Object(); -> 생성자 방식
// let person = {}; -> 객체 리터럴 방식

let person = {
  name: "이정환",
  age: 25,
  say: function () {
    console.log(`안녕, 나는 ${this.name}`);
    console.log(`내 나이는 ${this["age"]}`);
  }
};

// 프로퍼티 값에 접근하는 방법
console.log(person.name); // 점 표기법 (멤버)
person.say(); // (메서드)
console.log(person["name"]); // 괄호 표기법 (멤버)
person["say"](); // (메서드)

// 괄호 표기법의 장점 : 동적인 파라미터를 전달받는 상황
function getPropertyValue(key) {
  return person[key];
}
console.log(getPropertyValue("name"));

/* 객체에 프로퍼티 추가하기 */
person.location = "한국";
person["gender"] = "남성";

/* 수정하기 */
person.name = "임은상";
person["age"] = 40;

/* 삭제하기 - 1 : 프로퍼티를 삭제하지 않고 연결만 끊을 뿐(?) 메모리는 계속 차지하고 있다 */
// delete person["name"];
// delete person.age;

/* 삭제하기 - 2 : 권장되는 방법 */
person.name = null;
person["age"] = null;

/* 존재하는 프로퍼티인지 확인하는 방법 */
console.log(`${"name" in person}`);
console.log(`${"weight" in person}`);
```

# 배열

## 배열 선언
```js
// let arr = new Array(); // 생성자를 이용하여 선언
let arr = []; // 배열 리터럴을 이용하여 선언
```

## 반복문
```js
let person = {
  name: "이정환",
  age: 25,
  tall: 175
};

const personKeys = Object.keys(person); // 객체의 key를 배열의 형태로 저장
const personValues = Object.values(person); // 객체의 value를 배열의 형태로 저장

// 객체의 key와 value 순회, 출력
for (let i = 0; i < personKeys.length; ++i) {
  const curKey = personKeys[i];
  const curValue = personValues[i];
  //const curValue = person[curKey];

  console.log(`${curKey} : ${curValue}`);
}
```

