# 페이징 라우팅 0 - React SPA & CSR
여러 페이지로 구성된 웹사이트를 만들기 위해서 웹 서버가 여러개의 페이지를 어떻게 관리하고 페이지 이동과 같은 요청들을 어떻게 처리하는지 등의 웹사이트의 페이지와 관련한 기초 지식들을 습득할 필요가 있다. 따라서 페이징 라우팅을 배운다.

- `Routing`
    - 어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정
    - `Router` : 데이터의 경로를 정해주는 역할을 하는 네트워크 장치
    - 'Router + ing' : 경로를 정해주는 행위 자체와 그런 과정들을 다 포함하여 일컫는 말

- Page Routing
    - 요청에 따라서 어떠한 페이지를 돌려줄 지 결정하는 과정을 일컫는 말
    - 요청자가 요청한 페이지에 접속하는 행위까지 포함

- `Multipage Application(MPA)`
    - 서버에서 여러 개의 페이지를 준비해놨다가 요청을 받으면 경로에 따라 적절한 페이지를 보내주는 방식

- `Single Page Application(SPA)`
    - 리액트 방식
    - 존재하는 페이지는 단 하나
    - MPA는 브라우저가 서버에게 페이지를 요청하지만 SPA는 데이터만 요청하여 리액트 앱이 하나의 페이지를 지속적으로 업데이트
    - `Client Side Redering`
        - Client 측에서 알아서 페이지를 렌더링 하는 방식

# 페이지 라우팅 1 - React Router 기본
- React Router 다운로드
    - https://reactrouter.com/docs/en/v6/getting-started/installation

**Router 을 사용하여 SPA 방식 구현**

*App.js*
```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary" element={<Diary />} />
          // 경로가 path 일 때 element 를 렌더
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

*RouteTest.js*
```js
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/diary"}>DIARY</Link>
      <br />
      <Link to={"/new"}>NEW</Link>
      <br />
      <Link to={"/edit"}>EDIT</Link>
    </>
  );
};

export default RouteTest;
```

# 페이지 라우팅 2 - React Router 응용
- React Router Dom의 유용한 기능
    - `REACT ROUTER V6` : REACT에서 CSR기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리
    1. Path Variable (useParams)
        - url 에 변수를 담아서 전달하는 방법
    2. Query String (useSeachParams)
    3. Page Moving (useNavigate)

**Path Variable**

*App.js*
```js
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}
```

*Diary.js*
```js
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
```

**Query String**
- `Query` : 웹 페이지에 데이터를 전달하는 가장 간단한 방법
- /edit?id=10&mode=dark -> Query String

*Edit.js*
```js
import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "winterlood" })}>
        QS 바꾸기
      </button>
    </div>
  );
};

export default Edit;
```

**Page Moving**

*Edit.js*
```js
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  // useNavigate Hook : 페이지를 이동시킬 수 있는 함수를 반환

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
```

# 프로젝트 기초 공사 1
- 폰트 세팅
    - Google Web Fontes 를 이용한 프로젝트에 사용되는 폰트 세팅
    - 라이선스를 꼭 확인하고 사용할 것!
    - https://fonts.google.com/
    - **사용하기**

*App.css*
```css
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap");

.App {
  font-family: "Yeon Sung", cursive;
  font-family: "Nanum Pen Script", cursive;
  // 가장 뒤에있는 font-family 적용
}
```
    
- 레이아웃 세팅
    - 모든 페이지에 반영되는 레이아웃 세팅

*App.css*
```css
body {
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nanum Pen Script";
  min-height: 100vh;
  margin: 0px;
}

@media (min-width: 650px) {
  .App {
    width: 640px;
  }
}

@media (max-width: 650px) {
  .App {
    width: 90vw;
  }
}

#root {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.App {
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}
```

- 이미지 에셋 세팅
    - 감정 이미지들을 프로젝트에서 불러와 사용할 수 있는 환경 세팅
    - '/public/assets/' 경로에 이미지를 저장
    - **사용하기**

*App.css*
```css
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        // process.env.PUBLIC_URL : 최상위 디렉터리를 '/public' 으로 설정
      </div>
    </BrowserRouter>
  );
}
```

- 공통 컴포넌트 세팅
    - 모든 페이지에 공통으로 사용되는 버튼, 헤더 컴포넌트 세팅
    - **button 을 컴포넌트화 하기**

*App.js*
```js
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}```

*MyButton.js*
```js
const MyButton = ({ text, type, onClick }) => {
  const bntType = ["positive", "negative"].includes(type) ? type : "default";
  // 정의되지 않은 type 을 전달받으면 default 로 저장

  return (
    <button
      className={["MyButton", `MyButton_${bntType}`].join(" ")}
      // className = 배열의 요소와 요소를 join 으로 이어붙인 string
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
```

*App.css*
```css
.MyButton {
  cursor: pointer;
  border: none;
  border-radius: 5px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 18px;

  white-space: nowrap;
  font-family: "Nanum Pen Script";
}

.MyButton_default {
  background-color: #ececec;
  color: black;
}

.MyButton_positive {
  background-color: #64c964;
  color: white;
}

.MyButton_negative {
  background-color: #fd565f;
  color: white;
}
```

- 공통 컴포넌트 세팅 (이어서)
    - **Header 를 컴포넌트화 하기**

*App.js*
```js
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭")} />
          }
          rightChild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽 클릭")}
            />
          }
        />
      </div>
    </BrowserRouter>
  );
}
```

*MyHeader.js*
```js
const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="Head_btn_right">{rightChild}</div>
    </header>
  );
};
```

# 프로젝트 기초 공사 2
1. 상태 관리 세팅하기
    - 프로젝트 전반적으로 사용될 일기 데이터 State 관리 로직 작성하기
2. 프로젝트 State Context 세팅하기
    - 일기 데이터 State를 공급할 Context를 생성하고 Provider로 공급하기
3. 프로젝트 Dispatch Context 세팅하기
    - 일기 데이터 State Dispatch 함수들을 공급할 Context를 생성하고 Provider로 공급하기

*App.js*
```js
import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [...action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.date.id ? { ...action.date } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
```

# 페이지 구현 - 홈(/)
