const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.


let num = input[0]
let arr = input[1].split(' ').map(Number)

// arr중 가장 큰수 max
let max = Math.max(...arr)
let result = 0;

// result에 arr[i]/max*100한값을 더한다 
for(let i =0; i < num; i++) {
    result = result + arr[i]/max*100
}

// result나누기 과목개수 
console.log(result/num)

// 1. reduce 써보기 
// acc는 누산기 cur은 현재 값 0은 현재 인덱스 
// const newAvg = arr.reduce((acc,cur)=> {
    // (리턴값)이전값이 계속 acc에 들어가느 느낌
//   acc  += cur/max*100
// }, 0) / num
// console.log(newAvg)
