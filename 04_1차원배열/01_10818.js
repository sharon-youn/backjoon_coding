const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().split('\n')
//require('fs').readFileSync('dev/stdin')

// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.



let A = parseInt(input[0]) // 정수의 개수 
// sort를 이용해서 arr를 오름차순으로 정렬
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b)

console.log(arr[0] + ' ' + arr[arr.length-1])

// Math함수
// Math.min(...nums), Math.max(...nums)


// forEach: 배열요소 각각에 대해 실행
// const arr = input[1].split(' ').map(Number)
// // 꼭 0으로 줘야하는 건지?? 
// let min = arr[0]
// let max = arr[0]
// 반복문으로 돌리면서 max,min으로 넣어줌 
// arr.forEach((el)=> {
// if(el>max) max = el;
// if(el<min) min = el;
// })
// console.log(min, max)

//arr.reduce(누산값, 현재값, 인덱스)
// let [N, arr] = input
// arr = arr.split(" ").map(Number)
// let = result = [];
// acc>cur이면 cur로 push

//acc가 크면 cur acc>cur ? cur : acc 
// result.push(arr.reduce((acc,cur) => {
//     (acc>cur? cur:acc);
// }))
// result.push(arr.reduce((acc,cur) =>
// (acc<cur? cur:acc)))
// console.log(result.join(" "))