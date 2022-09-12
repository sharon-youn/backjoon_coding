// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString()
//require('fs').readFileSync('dev/stdin')
//예제.txt
// 꼭 바꿔주기


// 5가 입력됐을때 *이 1,2,3,4,5 가 찍혀야한다.
let result = ''; 
let star = '*'
// 1부터 5까지 반복되도록 1부터 시작
for(let i =1; i<= input; i++) {
  result = result.concat(star)
  console.log(result)
}
