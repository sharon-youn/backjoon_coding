// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')

// 5
// 1 1


for(let i =1; i<= input[0]; i++) {
  // [A,B]가 반복문 안에 들어와서 쭉 나오게 해야함
  let [A, B] = input[i].split(' ').map(Number)
  
  console.log(A + B)
}
// 띄어쓰기 출력하려고 [0] [2]로 나눠줌 
// for(let i=1; i<totalNum+1; i++){
//   console.log( Number(input[i][0]) + Number(input[i][2]) );
// }