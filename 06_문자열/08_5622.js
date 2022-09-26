const fs = require("fs");

const input= require('fs').readFileSync('예제.txt').toString()
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 1은 2 초 그 다음부터는 알파벳 3개씩 1초더하기
// console.log(input)
// console.log(input[0]) //UNUCIC
// console.log(input[0].length)  // 
// console.log(str[0])
let result = 0
let upper = {
 // 1은 2초부터 그다움부터는 1초씩 더하기 
    // PQRS, WXYZ 주의 
    ABC :3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
}

for(let i =0; i<=input.length; i++) {
  
    for(let el in upper) {
        if(el.includes(input[i])){
            result += upper[el]
        }
    }
}
console.log(result)