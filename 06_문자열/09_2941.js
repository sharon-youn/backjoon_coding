const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim()
//require('fs').readFileSync('dev/stdin')
// 예제.txt

let str = input;
// console.log(str)
let alpha = [
    'c=' ,
    'c-',
    'dz=',
    'd-',
    'lj',
    'nj',
    's=',
    'z='
]

// console.log(str.split('lj').join('0'))

for(let el of alpha) {
    // alpha의 el로 split하고 join으로 한 글자로 만들기
    // 'lj'로 Split하면 ->  ['' , 'es~' ]  
    // ''를 0으로 바꿔서 Join -> 0es=njak
    str = str.split(el).join('0')
}


  console.log(str.length)
