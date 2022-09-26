const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
// 734 893
// 437 398 중에 큰 수를 출력
//require('fs').readFileSync('dev/stdin')
//예제.txt

// console.log(input)
let [A, B] = input
// console.log(A, B)

// console.log(Math.floor(A/100))
// console.log(Math.floor(A%100/10))
// console.log(Math.floor(A%10))

// 734 자리수 추출해서 newA에 437 거꾸로 된 숫자 할당

let newA = Math.floor(A%10)*100 + Math.floor(A%100/10)*10 + Math.floor(A/100)
// console.log(newA)
let newB =  Math.floor(B%10)*100 + Math.floor(B%100/10)*10 + Math.floor(B/100)
// console.log(newB)

// if(newA>=newB){
//     console.log(newA)
// } else {
//     console.log(newB)
// }
console.log(newA >= newB ? newA : newB)

//reverse 사용하기
// 1.  reverse 사용하면 뒤집어짐
// '7''3''4' ->reverse-> '4''3''7' -> join("") 437
let n1 = input[0].split("").reverse().join("");
let n2 = input[1].split("").reverse().join("");
console.log(+n1 > +n2 ? +n1 : +n2);

// 더 짧게
let weird = input.map((el) => +el.split("").reverse().join(""));
console.log(Math.max(...weird));