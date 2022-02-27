# Node.js란?
html 내에서만 실행 가능한 제약으로부터 자유롭게 만든 'javascript 실행 환경 (javascript's runtime)'

- ## React란?
    - 간단하게.. 브라우저에서 동작하는 복잡하고 여러가지 기능을 가진 javascript 파일을 쉽게 만들어내는 기술
    - node.js 기반으로 사용할 수 있는 기술

# Node.js 패키지 생성 및 외부 패키지 사용하기
- ## package.json
    - 우리가 만들 package 정보를 기록하는 환경설정 파일
    - "main" - 실행 파일 지정
    - "scripts" - package를 개발하면서 자주 사용하는 명령어 정의 (ex> "start": "node 실행파일")
    - "dependencies" - 설치한 외부 패키지
```js
{
  "name": "package-example1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "winterlood",
  "license": "ISC"
}
```
