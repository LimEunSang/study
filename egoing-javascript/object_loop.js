// 배열에서 반복문
var memberArray = ["egoing", "graphittie", "leezche"];
console.group("array loop");
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("array loop"); // 결과 값을 보기 좋게 정리

// 객체에서 반복문
console.group("object loop");
var memberObject = {
  manager: "egoing",
  developer: "grphittie",
  designer: "leezche",
};

for (var name in memberObject) {
  console.log(name, memberObject[name]); // key, value, 중괄호!!
}
console.groupEnd("object loop");
