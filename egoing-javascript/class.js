class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

// 상속
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second); // super() : 부모 생성자 호출
    this.third = third;
  }
  sum() {
    return super.sum() + this.third; // super : 부모 클래스
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

// var kim = new Person("kim", 10, 20);
// // 함수 재정의
// kim.sum = function () {
//   return "re : " + (this.first + this.second);
// };
// console.log("kim", kim);
// console.log("kim.sum()", kim.sum());

// var lee = new Person("lee", 10, 10);
// console.log("lee", lee);
// console.log("lee.sum()", lee.sum());

var kim = new PersonPlus("kim", 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
