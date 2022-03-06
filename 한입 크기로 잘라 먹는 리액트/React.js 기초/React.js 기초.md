# Why React?
- Component 기반의 UI 라이브러리이다. 산탄총 수술(Shotgun surgery)을 피할 수 있다.
- 절차를 하나하나 다 나열 해야하는 명령형(ex> jQuery)이 아닌 그냥 목적을 바로 말하는 선언형 프로그래밍이다.
- Virtual DOM(Document Object Model)을 사용한다.

# Create React App
- Raect.js와 함께 사용하는 라이브러리
    - Webpack : 다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리
    - Babel : JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리

- Boiler Plate
    - 이미 세팅 완료된 패키지
    - 보일러를 찍어내는 틀
    - 마치 보일러를 찍어내듯, 서비스를 개발할 수 있는 빵 틀의 역할을 하는 패키지를 의미 

- npx create-react-app <파일명>
- react.js는 node.js 기반의 web server 위에서 동작하고 있다.
- scr 디렉터리 내 index.js가 실행되면서 index.html에 있는 id가 root인 div 아래로 App.js 내 App() 함수의 리턴 값이 들어간다..
- node_modules 설치 방법 : npm i (협업 시 node_modules까지 push하기 비효율적!)
- JSX
    - 자바스크립트 표현식 eXtention
    - javascript와 html을 합쳐서 사용할 수 있는 문법
    - javascript의 변수나 함수와 같은 값을 html에 쉽게 포함해서 사용할 수 있도록 고안된 문법
```js
function App() {
  let name = "이정환";

  return (
    <div className="App">
      <header className="App-header">
        <h2>안녕 리액트 {name}</h2>
      </header>
    </div>
  );
}
```
- 내보내기 / 불러오기 (ES Module Sysyem)
    - export default 이름;
    - import 이름 from "파일_경로";
    - 내보내기는 한 개만 가능

# JSX
- 문법
    - 닫힌 규칙 : 여는 태그가 있으면 닫는 태그가 존재해야 한다. or self_closing 태그
    - 최상위 태그 규칙 : 반드시 하나의 부모를 가져야 한다. or React.Fragment 기능
- CSS를 이용해 JSX 스타일링
- inline 스타일링 : CSS파일을 쓰지 않고 스타일링 하는 방식
- javascript 값을 사용하는 방법
- 조건부 랜더링

# State(상태)
 : 계속해서 변화하는 특정 상태, 상태에 따라 다른 동작을 함
```js
import React, { useState } from "react";

const Counter = () => {
  // useState method는 배열을 반환
  // 배열 비구조화 할당을 통해
  const [count, setCount] = useState(0);
  // count -> 상태의 값으로 사용, setCount -> 상태 변화 함수로 사용
  // 인자 0은 count의 초기값

  // 함수를 호출하면 count의 값을 setCount의 인자값으로 변경
  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  // 리랜더
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
```

# Props
- Props
    - 컴포넌트에 데이터를 전달하는 방법
    - 자식 컴포넌트에게 이름을 붙여 값을 전달하는 방식
    - properties의 줄임말

- App.js
```js
import React from "react";
import Counter from "./Counter";
import Container from "./Container";
// import "./App.css";
import MyHeader from "./MyHeader";

function App() {
  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    // initialValue: 5,
  };

  return (
    // Container -> 컴포넌트를 props로 전달하기
    <Container>
      <div>
        <MyHeader />
        {/* Counter에 해당 props 전달 */}
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
```

- Counter.js
```js
import React, { useState } from "react";
import OddEvenRsult from "./OddEvenResult";

// 비구조화를 통해 바로 initialValue 할당
const Counter = ({ initialValue }) => {
  // useState method는 배열을 반환
  // 배열 비구조화 할당을 통해
  const [count, setCount] = useState(initialValue);
  // count -> 상태의 값으로 사용, setCount -> 상태 변화 함수로 사용
  // useState 인자는 count의 초기값

  // 함수를 호출하면 count의 값을 setCount의 인자값으로 변경
  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  // 리랜더
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenRsult count={count} />
    </div>
  );
};

// initialValue 값을 넘겨 받지 못했을 때 기본값 설정
Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
```

- OddEvenResult
```js
const OddEvenRsult = ({ count }) => {
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenRsult;
```
<리랜더가 일어나는 세 가지 경우>
1. react의 컴포넌트는 본인이 관리하고 본인이 가진 state가 바뀔 때마다
2. 나에게 내려오는 props가 바뀔 때마다
3. 내 부모가 리랜더가 될 때마다

- Container.js
```js
// 컴포넌트를 props로 전달받기
const Container = ({ children }) => {
  return (
    <div style={{ margin: 20, padding: 20, border: "1px solid gray" }}>
      {children}
    </div>
  );
};

export default Container;
```
    
