// run.js
// 빠른 A+B
// 더 빨리 결과 추출하는 코드 

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')
// 꼭 바꿔주기

// Number로 일일이 다 씌어줘야함
// parseInt로 해도 됨! 
let total = Number(input[0])
 let result = ''


// 1부터 count만큼 ! 이건 본인의 선택에 따라 0부터 count-1로 되고 상관없음
for(let i =1; i<= total; i++) {
  // i가 1부터시작하니까 인덱스2부터 금액들이 나오니 i+1로 맞춰주기
  temp = input[i].split(' ')
  result += parseInt(temp[0]) + parseInt(temp[1]) + "\n"
}
console.log(result);