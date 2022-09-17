// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString().split(' ')
//require('fs').readFileSync('dev/stdin')
//예제.txt
// 꼭 바꿔주기
// repeat 써보기 !! 

// 5가 입력됐을때 *이 오른쪽 정렬로 1,2,3,4,5 가 찍혀야한다.
// 띄어쓰기 5개 초기에 주면 됨
let result = '     '; 
let star = '*'

// 직관적으로 1부터 시작하려고 result에 ' ' 줌
// for(let i = 1; i<input; i++) {
//   result = result + ' '
// }

for(let i =1; i<= input; i++) {
  // result 1번째부터 마지막 인덱스까지 나오게 하기 
  result = result.substring(1)
  result = result.concat(star)
  console.log(result);
}
// 다른 분 풀이 
// for (let i = 0; i < num; i++) {
//   let star = '';

//   for (let j = num - 1; j >= 0; j--) {
//       if(j<=i){
//           star += "*"
//       } else {
//           star += " "
//       }
//   }