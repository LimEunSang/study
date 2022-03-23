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
    - [link](https://reactrouter.com/docs/en/v6/getting-started/installation)

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
