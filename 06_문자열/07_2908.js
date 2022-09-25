const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
// 734 893
// 437 398 중에 큰 수를 출력
//require('fs').readFileSync('dev/stdin')
//예제.txt

// console.log(input)
let [A, B] = input
// console.log(A, B)

// console.log(Math.floor(A/100))
// console.log(Math.floor(A%100/10))
// console.log(Math.floor(A%10))

// 734 자리수 추출해서 newA에 437 거꾸로 된 숫자 할당

let newA = Math.floor(A%10)*100 + Math.floor(A%100/10)*10 + Math.floor(A/100)
// console.log(newA)
let newB =  Math.floor(B%10)*100 + Math.floor(B%100/10)*10 + Math.floor(B/100)
// console.log(newB)

// if(newA>=newB){
//     console.log(newA)
// } else {
//     console.log(newB)
// }
console.log(newA >= newB ? newA : newB)