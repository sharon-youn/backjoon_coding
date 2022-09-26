const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= fs.readFileSync('dev/stdin').toString().split('\n');

//require('fs').readFileSync('dev/stdin')
//예제.txt

// 첫째줄에 가장 많이 사용된 알파벳을 대문자로 출력 
// 가장 많이 사용된 알파벳이 여러개인 경우는 ?

solution(input[0])

function solution(str) {
    let newStr = str.toLowerCase();
    let obj = {}
   
    // 논리 or 할당 연산자 -> 연습해보기 1
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment
    for(let i =0; i< newStr.length; i++) {
       
        // obj에 key값으로 newStr[i] , value로 반복횟수 
        // obj[newStr[i]] = obj[newStr[i]]+1 || 1
        // 밑에 꺼를 윗줄 하나로 바꿀 수 있음!! 
        // 논리or할당연산자 true면 1 증가 없으면 key값에 1 증가
            if(obj[newStr[i]] === undefined) {
               // 없으면 obj에 char : 1 생성
                obj[newStr[i]] = 1; 
            } else {
                // 있으면 1 증가
               obj[newStr[i]] += 1;

            }
         }

let max = '';
let count = 0; // 가장 많이 사용된 알파벳 판단 

        for(let key in obj) {
            // obj의 key 반복문 
            if(count < obj[key]){
                // obj[key] 가 더 크면 바꿔주기
                count = obj[key]
                // max에 key 담기-> 대문자로 변환 
                max = key.toUpperCase();
            } else if (count === obj[key]){
            // 반복되는 갯수가 여러개인 경우
               max = "?"
            }
        }
        console.log(max)

}

// filter 이용


let frequency = {};

for (let i = 0; i < input.length; i++) {
  if (frequency[input[i]] !== undefined) frequency[input[i]]++;
  else frequency[input[i]] = 0;
}

let values = Object.values(frequency);
let max = Math.max(...values);
// filter로 2개이상이면 ? - > 반복되는 갯수가 여러개인 경우
if (values.filter((el) => el === max).length > 1) {
  console.log("?");
} else {
  console.log(Object.keys(frequency).find((key) => frequency[key] === max));
}
