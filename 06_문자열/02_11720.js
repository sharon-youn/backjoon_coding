const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째줄에 숫자의 개수 둘재줄에 숫자 N개가 공백없이 주어짐
// 입력으로 주어진 숫자 N개의 합을 출력

let num = input[0]
let str = input[1]
let result = 0;


for(let i =0; i<num; i++){
    // str -> 배열로  -> 문자열배열을 숫자 배열로 
   let arr = [...str].map(Number)
   result = result + arr[i]
}    
console.log(result)