const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim().split(' ')


// 26
// 배열 복사하기 
let result = input.slice();

if(result[0] < 10) {
    // result[0]에 0 더해주기 
      result[0] = '0' + input[0]
    } 
console.log(result)   //['01']

// let A = parseInt(newArr[0][0]); // 0 
// let B = parseInt(newArr[0][1]); // 1
let newArr = result.slice();
do {
    let A = newArr[0][0]; // 0 
    let B = newArr[0][1]; // 1
    result[0][0] = B;
    result[0][1] = A+B;
    console.log(result)
    count++
}
while(result !== input);