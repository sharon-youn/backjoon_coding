const fs = require("fs");

const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
//require('fs').readFileSync('dev/stdin')
//예제.txt

// console.log(input)
// indexof() 배열에서 특정값이 처음으로 나타나는 인덱스를 리턴
// 수는 중복되지 않는다.

// 맨 앞줄만 떼기 ! 
let N = input.shift()

// console.log(input)
let str = input.sort((a,b) => a-b)

//sort로 오름차순 정렬

for(let el of str) {
    console.log(el)
}