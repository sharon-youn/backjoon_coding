// run.js

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')
//예제.txt
// 꼭 바꿔주기

// 10 5 input 0번째 이렇게 받아와야함..
let N = parseInt(input[0].split(' ')[0]);
let X = parseInt(input[0].split(' ')[1]);
// arr에 두번째 예제 입력 담기
let arr = input[1].split(' ').map(Number)
let result = ''

// arr[i] 랑 X 비교
for(let i = 0; i<N ; i++) {
    if(arr[i] < X){
        // 출력할때 ' '로 띄어주기
        result = result + arr[i] + ' '
    } 
}

console.log(result)

