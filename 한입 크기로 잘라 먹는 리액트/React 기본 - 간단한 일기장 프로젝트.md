# React Lifecycle 제어하기 - useEffect
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

# 최적화 1 - useMemo
- Memoization
    - 이미 계산 해 본 연산 결과를 기억 해 두었다가 동일한 계산을 시키면, 다시 연산하지 않고 기억 해 두었던 데이터를 반환 시키게 하는 방법

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
// 위 두 번째 인자의 값이 바뀌지 않으면 새로 계산을 하지 않고 memoization 기법을 사용

const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
```

# 최적화 2 - React.memo
 : 함수형 컴포넌트에서 업데이트 조건을 거는 기능 - [react docs](https://ko.reactjs.org/docs/react-api.html#reactmemo)

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

- 값이 바뀌지 않았음에도 얕은 복사로 인한 redering 이 일어나는 경우
```js
import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`ConterA update - count: ${count}`);
  });
  return <div>{count}</div>;
});

// javascript 에서는 객체를 비교할 때 얕은 비교(주소에 의한 비교)를 하기 때문에 redering 한다.
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

- 비교 함수를 만들어 rendering 이 일어나지 않게 바꾸기 - [react docs](https://ko.reactjs.org/docs/react-api.html#reactmemo)
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
- 함수형 컴포넌트 전체를 React.memo 로 감싸기
```js
export default React.memo(DiaryEditor);
```

- useCallback 을 이용한 함수의 재생성, 재생성하면서 항상 최신의 상태를 참조할 수 있도록 도와주는 함수형 업데이트
- [react docs](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)

**App.js**
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
    setData((data) => [newItem, ...data]); // 함수형 업데이트
  }, []);
```

# 복잡한 상태 관리 로직 분리하기 - useReducer
 : 컴포넌트에서 상태변화 로직을 분리
 
**기본 형식**
```js
const Counter = () => {
  // count : state
  // dispatch : 상태 변화 raise
  // reducer : 상태 변화 함수
  // 1 : 초기값
  const [count, dispatch] = useReducer(reducer, 1);

  return (
    <div>
      {count}
      <!-- { type: 1 } : action 객체 -->
      <button onClick={() => dispatch({ type: 1 })}>add 1</button>
      <button onClick={() => dispatch({ type: 10 })}>add 10</button>
      <button onClick={() => dispatch({ type: 100 })}>add 100</button>
      <button onClick={() => dispatch({ type: 1000 })}>add 1000</button>
      <button onClick={() => dispatch({ type: 10000 })}>add 10000</button>
    </div>
  );
};
```

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      return state + 1;
    case 1:
      return state + 1;
    case 1:
      return state + 1;
    case 1:
      return state + 1;
    case 1:
      return state + 1;
    default:
      return state;
  }
};
```

**App.js**
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
- Context API
    - props drilling 예방
    - Context(문맥) 생성, 해당 Context 공급자인 Provider 에게 모든 데이터를 직접(↔props drilling) 공급하도록 구현
    - 기본 문법
```js
// Context 생성
const MyContext = React.createContext(defaultValue);

// Context Provider 를 통한 데이터 공급
<MyContext.Provider value={전역으로 전달하고자하는 값}>
  {/*이 Context 안에 위치할 자식 컴포넌트들*/}
</MyContext.Provider>
```

**수정 전 App.js**
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

**수정 전 DiaryList.js**
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

**수정 후 App.js**
```js
return (
    <DiaryStateContext.Provider value={data}>
      <div className="App">
        <DiaryEditor onCreate={onCreate} />
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
      </div>
    </DiaryStateContext.Provider>
);
```

**수정 후 DiaryList.js**
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

**onEdit, onRemove 컴포넌트 데이터 전달받기, App.js**
- 하나의 Provider 에게 전달받기x → 같은 Context 중복 Privoider 선언 후  각각 다른 데이터 전달하기
```js
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
