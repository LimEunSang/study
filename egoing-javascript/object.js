var memberArray = ["egoing", "graphittie", "leezhce"];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezhce",
};

memberObject.designer = "leezche"; // 수정
console.log(memberObject.designer); // 멤버 접근 방법 1
console.log(memberObject["designer"]); // 멤버 접근 방법 2
delete memberObject.manager; // 삭제
