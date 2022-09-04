//첫번째 틀린..? 방법
// run.js
// 입력 !
//첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다. 

// 출력 !
// 첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input =require('fs').readFileSync('dev/stdin')
.toString().split('\n')

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력 값 가져오기 + 데이터 정제

// 조건은 범위가 좁은것부터 넓게 우선순위 두기 
// 1. A가 23 고 B+C>=60이면 A===0, B+C-60
// 2. B+C>=60이면 A+1  B+C-60
// 3. B+C<60이면 A, B+C
// 4. B+C>= 60  A+1
// 5. B+C>= 120  A+2 .... 
// 시간별 x구해서 A에 더해주기

let A = parseInt(input[0].split(' ')[0]);
let B = parseInt(input[0].split(' ')[1]);
let C = parseInt(input[1]);


let addA; // B+C가 60이상일때 A 더할 값
let result;  // B+C에서 60*시간만큼 빼줌 
if(B+C >= 60) {
  addA = Math.floor((B+C) / 60)
  result = B+C -(60*addA)
}
if(A===23 && B+C>=60) {
  addA = Math.floor((B+C) / 60)
  result = B+C -(60*addA)
  console.log(0+(addA-1), result)
} else if(B+C>=60) {
  addA = Math.floor((B+C) / 60)
  result = B+C -(60*addA)
  console.log(A+addA,result)
} else if( B+C<60) {
  console.log(A, B+C)
} 





