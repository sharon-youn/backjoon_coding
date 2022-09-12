// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')


// 1 1
// 2 3...

let i = 0

// input[i]가 있을때만
while(input[i]) {
    // Number로 A,B에 담기
    let [A, B] = input[i].split(' ').map(Number)
    console.log(A + B)
    i++;
}

