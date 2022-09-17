// 다른풀이

const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('예제.txt').toString().trim(); 
// trim은 앞뒤 공백을 잘라줌 
//require('fs').readFileSync('dev/stdin')

// 26

let result;
console.log(input)
// 1자리면 0을 더해라
if(input.length === 1) {
    // result[0]에 0 더해주기 
      input = '0' + input
    } 
    // 배열 복사하기 (새로운 변수에)
result = input;
// ''기준으로 split해서 1의자리 10의자리 나눔 
result = result.split('').map(Number)
console.log(result)   //['01']

let count = 0;
while(ture) {
  // 두번째 인자는 68에서 일의 자리만 잘라냄 -> 8 
    arr = [arr[1], 
    Number((arr[0]+arr[1]).toString().slice(-1))]
    count++;
    // 숫자 배열을 join으로 하나의 문자열로 만듦
    if(arr.join('')===input) break;
}
console.log(count)
// 다른 분 풀이 
// ""+num -> string로 바꿔줌 , +str -> number로 바꿔줌 
// let str = num < 10 ? "0" + num : "" + num;
// let count;

// for (count = 0; count === 0 || num !== +str; count++) {
//   str = str[1] + String(+str[0] + +str[1]).slice(-1);
// }




// console.log(count);


// let A = parseInt(newArr[0][0]); // 0 
// let B = parseInt(newArr[0][1]); // 1
// let newArr = result.slice();
// do {
//     let A = newArr[0][0]; // 0 
//     let B = newArr[0][1]; // 1
//     result[0][0] = B;
//     result[0][1] = A+B;
//     console.log(result)
//     count++
// }
// while(result !== input);