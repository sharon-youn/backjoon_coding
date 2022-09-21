const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(Number)
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

let newArr = input.map(el => el % 42)
// Set객체 - 배열의 중복을 제거해줌
let set = new Set(newArr)

// 배열로 만들어주기 
let newSet = [...set]

console.log(newSet.length)

// set 길이 
// set.size = arr.length 
// 중괄호로 반환돼서 객체느낌! 