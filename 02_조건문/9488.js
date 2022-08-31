
// run.js
// 입력 !
//첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
// 출력 !
// 시험 성적을 출력한다.
// A -> 90~100
// B -> 80~89
// C -> 70~79
// D -> 60~69
// F -> 59점 아래

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input =require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 .toString().split(' ').map(Number);

//require('fs').readFileSync('dev/stdin')
// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력 값 가져오기 + 데이터 정제

if(input>=90) { // 90점보다 크다면 
  console.log('A')
} else if (input >= 80) {
  console.log('B')
} else if (input >= 70) {
  console.log('C')
} else if (input >= 60) {
  console.log('D')
} else {
  console.log('F')
}

// 다른 분들 풀이
// function을 썼다!
// function score(a) {
  // if(input>=90) return console.log('A')
// 마지막에 score(input)으로 실행시켜주기

// function score(a){
//   if(A>=90)return console.log('A')
//   if(A>=80)return console.log('B')
//   if(A>=70)return console.log('C')
//   if(A>=60)return console.log('D')
//   if(A>=0)return console.log('F')
// }
// score(A)



