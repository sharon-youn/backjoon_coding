// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
const input = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number)
//require('fs').readFileSync('dev/stdin')

// 입력 2 
// 2*1 ~ 9 까지 출력
for(let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input*i}`)
}