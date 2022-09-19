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

let max = Math.max(...arr)
let result = 0;


for(let i =0; i < num; i++) {
    result = result + arr[i]/max*100
}


console.log(result/num)



