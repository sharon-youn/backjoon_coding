
const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(Number)
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.


// spread 로 펼쳐서 그중 가장 큰숫자 반환
let max = Math.max(...input)

let index;
//  식을 더 짧게하고 싶었으나 실패ㅠㅠㅠ 

for(let i = 0; i<input.length; i++){
        // i는 0부터 시작하니까 순서 구하려면 +1 해주기
   input[i] === max ? index = i+1 : null;
}
console.log(max, index)

// 인덱스 구하기 
// arr indexof 배열 순환하는 것이 시간이 더 걸릴수있다! 
// indexOf로 max 인덱스구해서 +1
// console.log(input.indexOf(max) +1)

//forEach 사용
// let maxVal = input[0]
// let maxIdx = 1; // 일단 설정..?
// input.forEach((el, idx) => {
//         if(el>maxVal) {
//                 //el이 더 크면 
//                 maxVal=el;
//                 maxIdx= idx+1
//         }
// })

