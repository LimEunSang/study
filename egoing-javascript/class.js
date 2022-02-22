class Person {
  // 생성자
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log("constructor");
  }

  sum() {
    return "prototype : " + (this.first + this.second);
  }
}

var kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this : " + (this.first + this.second);
};
console.log("kim", kim);
console.log("kim.sum()", kim.sum());

var lee = new Person("lee", 10, 10);
console.log("lee", lee);
console.log("lee.sum()", lee.sum());
