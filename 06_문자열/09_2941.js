const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim()
//require('fs').readFileSync('dev/stdin')
// 예제.txt

let str = input;
// console.log(str)
//크로아티아 알파벳을 배열에 담아서 단어별로 split하고 '0'으로 만들기 

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

// replace이나 replaceAll 쓰기
// str = str.replaceAll(el, '0'); 이런식으로 
// 모든 el을 0으로 다 바꿔주기! 
for(let el of alpha) {
    // alpha의 el로 split하고 join으로 한 글자로 만들기
    // 'lj'로 Split하면 ->  ['' , 'es~' ]  
    // ''를 0으로 바꿔서 Join -> 0es=njak
    str = str.split(el).join('0')
}


  console.log(str.length)

// replaceAll로 풀수 있음

//   for (let el of alphabet) {
//     input = input.replaceAll(el, '.');
//   }
  
//   console.log(input.length);