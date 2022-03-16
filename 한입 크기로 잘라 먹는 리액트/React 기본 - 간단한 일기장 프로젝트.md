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
