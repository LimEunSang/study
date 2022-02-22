function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

// prototype 을 사용하면 객체를 생성할 때 마다 불필요하게 함수를 정의하는 작업을 생략할 수 있다!
Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second + this.third);
};

var kim = new Person("kim", 10, 20, 30);
kim.sum = function () {
  return "this : " + (this.first + this.second + this.third);
};

var lee = new Person("lee", 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
