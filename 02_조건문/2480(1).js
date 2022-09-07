// 첫번째 방법 너무 장황하고 문제도 틀렸다고 나옴 
// run.js
// 입력 !
//첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다. 

// 출력 !
// 첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const [a,b,c] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number)
//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다

// 읽어 온 값은 array로 저장된다
// 입력 값 가져오기 + 데이터 정제
//sort((x,y) => x-y) a,b,c오름차순 정렬 

// 조건은 범위가 좁은것부터 넓게 우선순위 두기 
//1.  먼저 셋다 같을 때 -> 10000+a*1000
// 2. a =b or b=c일때 1000+b*100 -> 순서대로 sort했으니 b는 무조건 같은 수 
// 3. 모두 다른 눈인 경우 c*100
if(a === c) {
  if(a === b) {
    console.log(10000+(a*1000))
  } else {
    console.log(1000+(a*100))
  }
} else if(b === c) {
  if(b === a) {
    console.log(10000+(b*1000))
  } else {
    console.log(1000+(b*100))
  }
} else if(a === c) {
  if(a === b) {
    console.log(10000+(a*1000))
  } else {
    console.log(1000+(a*100))
  }
} 
if(a !== c && b!==a && c!==a) {
 console.log(c*100)
}


