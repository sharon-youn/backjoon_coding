const fs = require("fs");
// 옆에 있을떈 split(' ')로 하기!! 
const input= fs.readFileSync('dev/stdin').toString().split('\n')


//require('fs').readFileSync('dev/stdin')
//예제.txt

// 첫째 줄에는 응시자의 수 N$N$과 상을 받는 사람의 수 k$k$가 공백을 사이에 두고 주어진다.

// 둘째 줄에는 각 학생의 점수 x$x$가 공백을 사이에 두고 주어진다.

let [ N, K] = input[0].split(' ')

// console.log(A, B)
// console.log(input[0])

// 둘째줄 내림차순 정렬 
let arr = input[1].split(' ').map(Number).sort((a,b)=>b-a)

// console.log(arr)

// K번째로 점수가 높아야 하니 인덱스는 K-1
console.log(arr[K-1])