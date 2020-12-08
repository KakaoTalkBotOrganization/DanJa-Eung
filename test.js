// 이것은 어떻게 프로그램을 구성할 지에 대한 미리보기 코드입니다.
// 

let dje = require("./Danja.js").DJEFactory;
dje = new dje({
    strictMode : true
});
dje.addTag("a", 2, (a, b) => {
    return a + " 가라사대 \" " + b + " \"";
});
console.log(dje.run("시작됨 . \n[[a|피코|이거 좋음 . 써보셈 !!!!]] \n 종료됨 ."));
