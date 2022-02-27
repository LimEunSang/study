const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// comeonjs 모듈 시스템 : 내보내기
module.exports = {
  moduleName: "calc module",
  add: add,
  sub: sub,
};
