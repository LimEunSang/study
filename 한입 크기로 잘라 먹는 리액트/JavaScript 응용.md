# Truthy & Falsy
```js
const getName = (person) => {
  // falsy한 속성이 파라미터로 입력되는 경우
  if (!person) {
    return "객체가 아닙니다";
  }
  
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
```

# 단락회로 평가
```js
const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다";
};

// let person = { name: "이정환" }; // truthy한 값 설정
let person = null; // falsy한 값 설정

const name = getName(person);
console.log(name);
```

# 비 구조화 할당

- ## 배열 비 구조화 할당 - 1
```js
//  let arr = ["one", "two", "three"];
//  let one = arr[0];
//  let two = arr[1];
//  let three = arr[2];

// -> 비 구조화 할당으로 간단하게 하기
// let arr = ["one", "two", "three"];
// let [one, two, three] = arr;

// -> 더 간단히 하기
let [one, two, three] = ["one", "two", "three"];

console.log(one, two, three);
```

- ## 배열 비 구조화 할당 - 2
```js
// let a = 10;
// let b = 20;
// let tmp = 0;

// tmp = a;
// a = b;
// b = tmp;

// -> 비 구조화 할당으로 간단하게 하기
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);
```

# Spread 연산자
- ## 객체에서 사용
```js
const cookie = {
  base: "cookie",
  madeIn: "korea"
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip"
};

const blueberryCookie = {
  ...cookie,
  toping: "chocochip"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
```

- ## 배열에서 사용
```js
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];
const allCookies = [...noTopingCookies, ...topingCookies];
console.log(allCookies);
```

# 동기 & 비동기
- 비동기 작업 : 싱글 쓰레드 방식을 이용하면서, 동기적 작업을 단점으로 극복하기 위해 여러 개의 작업을 동시에 실행시킴. 즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함.

- setTimeout(() => {}, n) : n초 뒤에 콜백 함수를 실행시키는 비동기 함수

- ## 비동기 이해하기
```js
// 비동기 처리의 결과값을 이용해야 할 때 - callback 함수 사용
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

// taskA(3, 4, (res) => {
//   console.log("A TASK RESULT : ", res);
// });

// taskB(7, (res) => {
//   console.log("B TASK RESULT : ", res);
// });

// taskC(14, (res) => {
//   console.log("C TASK RESULT : ", res);
// });

// callback hell!!
taskA(4, 5, (a_res) => {
  console.log("A RESULT : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C RESULT : ", c_res);
    });
  });
});

console.log("코드 끝");
```

# Promise - 콜백 지옥에서 탈출하기
- ## Promise
    - 자바스크립트의 비동기 담당 객체
```js
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

// isPositive(
//   10,
//   (res) => {
//     console.log("성공 : ", res);
//   },
//   (err) => {
//     console.log("실패 : ", err);
//   }
// );

function isPositiveP(number) {
  // 실행자 : 비동기 작업을 실질적으로 수행하는 함수
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };

  // 실행자 실행
  const asyncTask = new Promise(executor);
  return asyncTask; // Promise 객체 반환
}

const res = isPositiveP(101);

// res.then(콜백 함수).catch(콜백 함수)
res
  .then((res) => {
    console.log("성공 : ", res);
  })
  .catch((err) => {
    console.log("실패 : ", err);
  });
```

- ## then chaining
```js
function taskA(a, b) {
  // 위 isPositiveP 함수를 간편화한 코드
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

/* callback hell!! */
// taskA(4, 5, (a_res) => {
//   console.log("A RESULT : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("B RESULT : ", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("C RESULT : ", c_res);
//     });
//   });
// });

/* then chaining */
taskA(5, 1)
  .then((a_res) => {
    console.log("A RESULT : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });

/* 위 코드 분리하기 */
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return taskB(a_res);
});

const cPromiseResult = bPromiseResult.then((b_res) => {
  console.log("B RESULT : ", b_res);
  return taskC(b_res);
});

cPromiseResult.then((c_res) => {
  console.log("C RESULT : ", c_res);
});
```

# async & await - 직관적인 비 동기 처리 코드 작성하기
 : promise를 더 쉽고 가독성 좋게 작성할 수 있는 기능

- ## async 이해하기
```js
async function helloAsync() {
  return "hello Async";
}
// helloAsync -> Promise 객체
// return 값은 res

helloAsync().then((res) => {
  console.log(res);
});
```

- ## async, await 활용하기
```js
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function helloAsync() {
//   return delay(3000).then(() => {
//     return "hello async";
//   });
// }

// await 키워드를 비동기 함수의 호출 앞에 붙이면 비동기 함수가 동기적으로 동작하게 된다!!
async function helloAsync() {
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
```

# API 호출하기
```js
/* fetch -> javascript API 호출 내장함수 */
// let response = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (res) => {
//     console.log(res);
//   }
// );
/* API의 결과값을 반환x -> API 성공 객체 자체를 반환 */
/* 마치 편지를 받은 게 아닌 포장된 편지 봉투를 받은 것 */

async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
```
