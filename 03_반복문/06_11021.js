// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')
// 꼭 바꿔주기

// 테스트케이스 개수 total
let total = parseInt(input[0])



// 테스트케이스 0번째 값 제외 1부터 시작! 
for(let i =1; i<= total; i++) {
  let [A, B] = input[i].split(' ').map(Number)
  console.log(`Case #${i}: ${A+B}`);
}
