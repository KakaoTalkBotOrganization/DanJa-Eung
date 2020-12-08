// 이것은 어떻게 프로그램을 구성할 지에 대한 미리보기 코드입니다.
// 

let dje = require("./Danja.js").DJEFactory;
dje = new dje({
    strictMode : true
});
dje.addTag("미리보기", 1, (a) => {
    return "미리보기용 코드 입니다 : " + a;
});
dje.addTag("엔터", 0, () => '\n');
console.log(dje.run("[[미리보기|1234]] [[엔터]] [[미리보기|5678]]"));
