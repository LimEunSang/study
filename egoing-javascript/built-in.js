console.log("Math.PI", Math.PI); // 파이 값을 출력합니다.
console.log("Math.random()", Math.random()); // 랜덤 값을 출력합니다.
console.log("Math.floor(3.9)", Math.floor(3.9)); // 값을 반올림합니다.

var MyMath = {
  PI: Math.PI,
  // (객체 안에 포함된 함수를 method라 부른다. 일반 함수는 fuction.)
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));
