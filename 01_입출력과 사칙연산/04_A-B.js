const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다

const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let a = input[0]
let b = input[1]

//input에 저장된 값을 바꿔서 사용하면 된다
//위의 .toString()을 보면 알 수 있듯이 값들이 문자로 저장되어 있기 때문에
//parseInt 을 써서 숫자로 변환 해줘야 한다

console.log(a - b); // 출력