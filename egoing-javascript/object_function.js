var kim = { name: "kim", first: 10, second: 20 };
var lee = { name: "lee", first: 10, second: 10 };
lee.__proto__ = kim;

function sum(prefix) {
  return prefix + (this.first + this.second);
}

//sum();
console.log("sum.call(kim)", sum.call(kim, "=> ")); //sum.call(kim) => 30
console.log("sum.call(lee)", sum.call(lee, ": ")); //sum.call(lee) : 20

var kimSum = sum.bind(kim, "-> ");
console.log("kimSum()", kimSum());
