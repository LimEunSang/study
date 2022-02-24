var superObj = { superVal: "super" };
/* 정석 x */
// var subObj = { subVal: "sub" };
// subObj.__proto__ = superObj; // !! javascript - 링크로 부모 객체 설정

/* 정석 o*/
var subObj = Object.create(superObj);
subObj.subVal = "sub";
debugger;

console.log("subObj.subVal => ", subObj.subVal);
console.log("subObj.superVal => ", subObj.superVal);

subObj.superVal = "sub";
console.log("superObj.superVal => ", superObj.superVal); // 자식 객체가 부모 객체의 속성을 변경할 수 없다.
console.log("subObj.superVal => ", subObj.superVal); // 상속받은 자신의 속성만 변경할 수 있을 뿐.
//superObj.superVal =>  super

kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

/* __proto__ 이용 */
// lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   avg: function () {
//     return (this.first + this.second) / 2;
//   },
// };
// lee.__proto__ = kim;

/* Object.craet() 이용 */
var lee = Object.create(kim);
lee.name = "lee";
// lee.first = 10; <- 따로 정의해주지 않으면 부모의 value 그대로 물려받는듯?
lee.second = 10;
lee.avg = function () {
  return (this.first + this.second) / 2;
};

console.log("lee.sum()", lee.sum());
console.log("lee.avg()", lee.avg());
