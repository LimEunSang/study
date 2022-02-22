function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

// 함수를 생성자처럼 호출하면 함수가 클래스 역할을 함
var kim = new Person("kim", 10, 20, 30);
var lee = new Person("lee", 10, 10, 10);
