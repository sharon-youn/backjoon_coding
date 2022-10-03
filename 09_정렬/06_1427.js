const fs = require("fs");
// 옆에 있을떈 split(' ')로 하기!! 
const input= fs.readFileSync('dev/stdin').toString().split(' ').map(Number)
//require('fs').readFileSync('dev/stdin')
//예제.txt

// 수의 각 자리수를 한자리씩 쪼개기
let arr = input.join().split('')
// console.log(input.join().split(''))

// 내림차순 정렬 후 배열을 다시 문자열로 합치기 join('')
let newArr= arr.sort((a,b)=> b-a)
console.log(newArr.join(''))