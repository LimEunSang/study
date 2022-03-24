# React에서 사용자 입력 처리하기
**input tag, textarea tag**

*DiaryEditor.js*
```js
import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
```
 
**위 코드에서 동작이 비슷한 코드 묶기**

```js
import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    context: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="context"
          value={state.context}
          onChange={handleChangeState}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
```

**css styling**<br>
*App.css*
```js
.DiaryEditor {
  border: 1px solid gray;
  text-align: center;
  padding: 20px;
}

.DiaryEditor input,
textarea {
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
}

.DiaryEditor textarea {
  height: 150px;
}

.DiaryEditor select {
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
}

.DiaryEditor button {
  width: 500px;
  padding: 10px;
  cursor: pointer;
}
```

# React에서 DOM 조작하기 - useRef
- React 기능인 useRef 를 사용하여 DOM 요소에 접근할 수 있다.
- 현재 강의에서는 focus 를 주기 위해 사용

# React에서 배열 사용하기 1 - 리스트 렌더링 (조회)
**App.js 에서 list 를 생성해 자식 컴포넌트(DiaryList.js)로 데이터를 넘겨주고 자식 컴포넌트는 넘겨 받은 데이터를 렌더링하는 코드**

*App.js*
```js
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "임은상",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "하이 3",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
```

*DiaryList.js*
```js
const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <div key={it.id}>
            <div>작성자 : {it.author}</div>
            <div>일기 : {it.content}</div>
            <div>감정 : {it.emotion}</div>
            <div>작성시간(ms) : {it.created_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// diaryList 의 default 값 설정
DiaryList.defaultProps = {
  dirayList: [],
};

export default DiaryList;
```

위 방식은 DiaryList 데이터를 수정할 때 적절하지 않다. DiaryList 의 요소들을 관리하기 쉽게 DiaryItem.js 를 생성하고 코드를 수정하자.

*DiaryList.js*
```js
import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// diaryList 의 default 값 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
```

*DiaryItem.js*
```js
const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작 성 자 : {author} | 감 정 점 수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
```

# React에서 배열 사용하기 2 - 데이터 추가하기
- key concept
    - `state 끌어올리기`
    - `단방향 데이터 흐름`
    - `역방향 이벤트 흐름`

# React에서 배열 사용하기 3 - 데이터 삭제하기
- `props drilling`
    - onRemove 함수 : App.js -> DiaryList.js -> DiaryItem.js

# React에서 배열 사용하기 4 - 데이터 수정하기
**수정 상태를 구별하기 위한 컴포넌트 선언**

*DiaryItem.js*
```js
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
```

# React Lifecycle 제어하기 - useEffect
- `Lifecycle`
    - React 컴포넌트의 상애 주기 (생명 주기)
        - 탄생 : 화면에 나타나는 것 : Mount
        - 변화 : 업데이트(리렌더) : Update
        - 죽음 : 화면에서 사라짐 : UnMount

- `Lifecycle 을 제어`한다 ?
    - Lifecycle 의 각 주기에 어떤 작업을 수행시킬 수 있다.
    - 예시
        - Mount : 초기화 작업
        - Update : 예외 처리 작업
        - UnMount : 메모리 정리 작업

- `React Hooks`
    - 클래스형 컴포넌트만 쓸 수 있는 기능을 함수형 컴포넌트에서 낚아채서 사용할 수 있는 기능
    - 'use' keyword 사용
    - 예시 : useState, useEffect, useRef
    - Class형 컴포넌트의 길어지는 코드 길이 문제 발생, 중복 코드 / 가독성 문제 등을 해결하기 위해 등장

- useEffect
    - 첫 번째 인자 "Callback 함수" / 두 번째 인자 "의존성 배열(Dependency Array)"
    - 의존성 배열 내에 들어있는 값이 변화하면 콜백 함수가 수행된다.

*Lifecycle.js*    
```js
import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mount!");
  }, []);

  useEffect(() => {
    console.log("Update!");
  });

  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다 따라서 1로 초기화합니다");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Lifecycle;
```

```js
import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      // Unmount 시점에 실행
      console.log("Unmount!");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
```

# React에서 API 호출하기
- 이번 강의 세부 목표
    - useEffect를 이용하여 컴포넌트 Mount 시점에 API를 호출하고 해당 API의 결과값을 일기 데이터 초기값으로 이용
    
**API 사용**

*App.js*
```js
const App = () => {
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      };
    });

    setData(initData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);
  
  // onCreate, onEdit, onRemove 함수 생략

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};
```

# React developer tools
 : chrome 확장 프로그램명
 
- 개발자 도구 'Components' tab
    - components 계층 구조와 데이터 시각화
- View settings - Hightlight updates when components render
    - rereder 된 component 강조 기능

# 최적화 1 - useMemo
- `Memoization`
    - 이미 계산 해 본 연산 결과를 기억 해 두었다가 동일한 계산을 시키면, 다시 연산하지 않고 기억 해 두었던 데이터를 반환 시키게 하는 방법

*App.js*
```js
const getDiaryAnalysis = useMemo(() => {
  if (data.length === 0) {
    return { goodcount: 0, badCount: 0, goodRatio: 0 };
  }
  console.log("일기 분석 시작");

  const goodCount = data.filter((it) => it.emotion >= 3).length;
  const badCount = data.length - goodCount;
  const goodRatio = (goodCount / data.length) * 100.0;
  return { goodCount, badCount, goodRatio };
}, [data.length]);
// useMemo 두 번째 인자의 값이 바뀌지 않으면 새로 계산을 하지 않고 memoization 기법을 사용
// 첫 번째 인자인 callback 함수를 실행하지 않는다.
// ! useMemo의 return 값은 함수가 아니라 callback 함수의 return 값(위에선 객체)이다.

const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
```

# 최적화 2 - React.memo
- for 컴포넌트 재사용
    - 부모 컴포넌트가 rerender 되면 관련이 없는 자식 컴포넌트까지 rerender 되는 현상을 막기 위함
- 함수형 컴포넌트에서 업데이트 조건을 거는 기능 - [react docs](https://ko.reactjs.org/docs/react-api.html#reactmemo)

*OptimizeTest.js*
```js
import React, { useEffect, useState } from "react";

// props 인 text 가 바뀌지 않으면 rendering 하지 않는다.
const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  });
  return <div>{text}</div>;
});

// props 인 count 가 바뀌지 않으면 rendering 하지 않는다.
const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`);
  });
  return <div>{count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
    </div>
  );
};

export default OptimizeTest;
```

**값이 바뀌지 않았음에도 얕은 복사로 인한 redering 이 일어나는 경우**

```js
import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`ConterA update - count: ${count}`);
  });
  return <div>{count}</div>;
});

// 기본적으로 javascript 에서는 객체를 비교할 때 얕은 비교(주소에 의한 비교)를 하기 때문에 redering 한다.
const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`ConterB update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
```

**비교 함수를 만들어 rendering 이 일어나지 않게 바꾸기** - [react docs](https://ko.reactjs.org/docs/react-api.html#reactmemo)

```js
import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`ConterA update - count: ${count}`);
  });
  return <div>{count}</div>;
});

// 수정하기
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`ConterB update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.count === nextProps.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
```

# 최적화 3 - useCallback
**함수형 컴포넌트 전체를 React.memo 로 감싸기**

*DiaryEditor.js*
```js
export default React.memo(DiaryEditor);
```

- useCallback
    - [react docs](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)
    - useMemo 와 다르게 반환하는 값은 callback 함수 그 자체이다.

**useCallback 을 이용한 함수의 재생성, 재생성하면서 항상 최신의 상태를 참조할 수 있도록 도와주는 함수형 업데이트**<br>
*App.js*
```js
const onCreate = useCallback((author, content, emotion) => {
  const created_date = new Date().getTime();
  const newItem = {
    author,
    content,
    emotion,
    created_date,
    id: dataId.current,
  };
  dataId.current += 1;
  setData((data) => [newItem, ...data]); // 함수형 업데이트 : 상태변화 함수(setStatus) 함수에 함수를 전달하는 행위
}, []);
```

# 복잡한 상태 관리 로직 분리하기 - useReducer
 : 컴포넌트에서 상태변화 로직을 분리
 
**useReducer 을 사용하지 않았을 때**

```js
const Counter = () => {
  const [count, setCount] = useState(1);
    
  const add1 = () => {
    setCount(count + 1);
  };
  const add10 = () => {
    setCount(count + 10);
  };
  const add100 = () => {
    setCount(count + 100);
  };
  const add1000 = () => {
    setCount(count + 1000);
  };
  const add10000 = () => {
    setCount(count + 10000);
  };
}

return (
  <div>
    {count}
    <button onCLick={add1}>add 1</button>
    <button onCLick={add10}>add 10</button>
    <button onCLick={add100}>add 100</button>
    <button onCLick={add1000}>add 1000</button>
    <button onCLick={add10000}>add 10000</button>
  </div>
);
```
 
**useReducer 사용 기본 형식**

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      return state + 1;
    case 10:
      return state + 10;
    case 100:
      return state + 100;
    case 1000:
      return state + 1000;
    case 10000:
      return state + 10000;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 1);
  // count : state
  // dispatch : 상태 변화 raise 함수
  // reducer : 상태 변화 처리 함수 (dispatch 가 raise 한 변화를 처리)
  // 1 : state 의 초기값
  
  return (
    <div>
      {count}
      <!-- { type: 1 } : "action 객체", action : "상태 변화" -->
      <button onClick={() => dispatch({ type: 1 })}>add 1</button>
      <button onClick={() => dispatch({ type: 10 })}>add 10</button>
      <button onClick={() => dispatch({ type: 100 })}>add 100</button>
      <button onClick={() => dispatch({ type: 1000 })}>add 1000</button>
      <button onClick={() => dispatch({ type: 10000 })}>add 10000</button>
    </div>
  );
};
```

**적용하기**

*App.js*
```js
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

const App = () => {
  // const [data, setData] = useState([]);

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;
```

# 컴포넌트 트리에 데이터 공급하기 - Context
- `Provider`
    - 모든 데이터를 가지고 있는 컴포넌트(ex> <App/>)의 데이터를 전달받아 공급자 역할을 하는 자식 컴포넌트
    - 자신의 자손에 해당하는 컴포넌트에게 데이터를 직접 전달할 수 있다 - props drilling 예방

- `Context`
    - Provider 가 공급하는 모든 데이터에 접근할 수 있는 컴포넌트의 영역

- Context API
    - React 에서 문맥 관련한 코드를 쉽게 작성할 수 있도록 돕는 것
    - Context(문맥) 생성, 해당 Context 공급자인 Provider 에게 모든 데이터를 직접(↔props drilling) 공급하도록 구현
    - **기본 문법↓**
    
**Context 생성**
```js
const MyContext = React.createContext(defaultValue);
```

**Context Provider 를 통한 데이터 공급**
```js
<MyContext.Provider value={전역으로 전달하고자하는 값}>
  {/*이 Context 안에 위치할 자식 컴포넌트들*/}
</MyContext.Provider>
```

**Context API를 이용해 DiaryList에 data 전달하기**

수정 전 *App.js*
```js
return (
    <div className="App">
        <DiaryEditor onCreate={onCreate} />
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
);
```

수정 후 *App.js*
```js
return (
    <DiaryStateContext.Provider value={data}>
      <div className="App">
        <DiaryEditor onCreate={onCreate} />
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList onEdit={onEdit} onRemove={onRemove} />
      </div>
    </DiaryStateContext.Provider>
);
```

수정 전 *DiaryList.js*
```js
import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
```

수정 후 *DiaryList.js*
```js
import { useContext } from "react";
import { DiaryStateContext } from "./App.js";
import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onRemove }) => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
```

**Context API를 이용해 DiaryItem 에 onEdit, onRemove 전달하기**

하나의 Provider 가 모든 데이터를 한 번에 전달하면 자식 컴포넌트 전부에서 redering 이 일어나기 최적화가 이루어지지 않는다.<br>
따라서 같은 Context 에 중복으로 Privoider 를 선언 후 각각 다른 데이터 전달해야 한다!

*App.js*
```js
const memoizedDispatches = useMemo(() => {
  return { onCreate, onRemove, onEdit };
}, []);
  
return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor />
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 나쁜 일기 개수 : {badCount}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
);
```

나머지 컴포넌트들의 코드는 결과물 코드 확인!

# 추가해 볼 기능
- emotion 변경 가능 (완)
- emotion 설정, 변경할 때 쓰이는 select tag 컴포넌트 따로 정의해서 사용 (완)
- 최선 수정 날짜 추가 (완)
