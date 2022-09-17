// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다

const input= require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number)
//require('fs').readFileSync('dev/stdin')
 

// result 변수 숫자로 선언 
let result = 0;
// i가 1부터 
for(let i =1; i <= input ; i++) {
  result = result + i
}
console.log(result)