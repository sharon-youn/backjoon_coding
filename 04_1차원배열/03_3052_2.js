const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n')
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.
// map으로 el%42의 값 newArr 재정비
let newArr = input.map(el => el % 42)

// filter로 newArr의 el과 현재 인덱스의 같은 값들만 담기
// filter로 중복되는 요소를 제거한다 -> 서로 다른 나머지의 개수
// indexOf(el)은 중복되는 값중에 가장 먼저 나온 값의 인덱스만 나오니까
// 중복된 값이라면 i(현재 인덱스값)과 같지 않을 것! 
console.log(newArr)
const uniqueArr = newArr.filter((el,i) => {
    return newArr.indexOf(el) === i;
})


console.log(uniqueArr.length)

//배열 중복 제거 

// forEach, indexOf, 써서 구하기
//let arr = [];
// input.forEach((el) => (arr.indexOf(el % 42) === -1 ? arr.push(el % 42) : ""));
//console.log(arr.length);

//for문 , includes
// let remainders = [], remainder;
// for(let i =0; i<input.length; i++) {
//     remainder = input[i] % 42
//     if(!remainders.includes(remainder))
//     remainders.push(remainder)
// }
// console.log(remainders.length);