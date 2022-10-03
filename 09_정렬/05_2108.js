const fs = require("fs");
// 옆에 있을떈 split(' ')로 하기!! 
const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number)

//require('fs').readFileSync('dev/stdin')
//예제.txt
// <입력>
// 첫째줄은 수의 개수 N (홀수)
//<출력>
// 1. 산술평균(소수점 이하 첫째자리에서 반올림) ->Math.round(숫자)
// 2. 중앙값 (N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값)
// -> 중복제거 오름차순하고 그 가운데 
// 3. 최빈값 (  N개의 수들 중 가장 많이 나타나는 값)
// 4. 범위 ( N개의 수들 중 최댓값과 최솟값의 차이)

let num = input.shift()
// console.log(num)
// console.log(input)

// 누적합으로 평균 구하기
// Math.round(숫자) => 첫째자리에서 반올림
let avg = Math.round(input.reduce((sum, curValue) => sum + curValue, 0) / num);
// 1. 산술평균
// -0이면 0으로 바뀌도록 출력
console.log(avg === -0? 0: avg)
// console.log(input)
// 2. 중앙값
// 오름차순 정렬하고 가운데 인덱스 구하기
let newArr = input.sort((a,b)=>a-b)
console.log(newArr[Math.floor(newArr.length/2)])
//3. 최빈값

// N개의 수 중 가장 많이 나타나는 값
let obj = {}
for(let i =0; i<num; i++) {
    if(obj[input[i]] === undefined) {
        // 없으면 obj에 char : 1 생성
         obj[input[i]] = 1; 
     } else {
         // 있으면 1 증가
        obj[input[i]] += 1;

     }
}
// console.log(obj)

let count = 0;
let result = [];
for(let key in obj) {
    if(count < obj[key]) {
        // obj[key]가 더 크면 count 바꿔주기
        count = obj[key]
        // result 리셋 -> 큰 값이 여러개 있을 수 있음! 
        result = [];
        result.push(key);
    } else if (count === obj[key]) {
        result.push(key)
    }
}
// if(result.length > 1) {
// console.log(result.sort((a,b)=>a-b)[1])

// } else {
//     console.log(result.join())
// }
console.log(result.length > 1? Number(result.sort((a,b)=>a-b)[1]) : Number(result[0]) )


// 4. 범위 ( N개의 수들 중 최댓값과 최솟값의 차이)
// let max = Math.max(...newArr)
// console.log(max)
// let min = Math.min(...newArr)
// console.log(min)
console.log( Math.max(...newArr)- Math.min(...newArr))