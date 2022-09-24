const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('예제.txt').toString().trim().split(' ')
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// a가 처음 등장하는 위치 b가 처음 등장하는 위치...z가 처음 등장하는 위치
// 단어에 그 알파벳이 없다면 -1을 출력하면 됨

// backjoon
// a는 1번째위치에 있고 b는 0번째 위치에 있음 e는 2번째 위치 
// a b c  d   e  f g h i g  j l m n
// 1 0 -1 -1 2  -1 -1 -1 -1 
// 아스키코드로 알파벳별 번호 매기고 단어에 해당하는 알파벳 있으면
// 그 단어의 인덱스를 추출! 없으면 -1 
// 알파벳 소문자 97~122

// input = ['backjoon'] -> 문자열 만들기 arr.join()
// let str = input.join()

// let result = ''
// 알파벳 소문자 97~122
//String.fromCharCode(num) -> 문자열을 아스키코드 번호로 변환

// for(let i = 97; i<=122; i++) {
//      let alpha = String.fromCharCode(i)
//      // a, b, c, d, e, ... 
//      console.log(alpha)
//     result += str.indexOf(alpha) + ' '
// }
// console.log(result)

// let arr = str.split('')
// console.log(arr) // ['b', 'a', 'e','k', 'j', 'o','o', 'n']

let str = input.join()
let alpha = "abcdefghijklmnopqrstuvwxyz".split('')
console.log(alpha)
for(let i =0; i<alpha.length; i++) {
    //arr[i]가 alpha에 포함되어있으면
    // arr[i]의 인덱스를 반환하라 
//     console.log(arr[0])
// includes를 할 필요가 없는게 이미 Indexof는 있는것만 나옴! 

   if(arrAlpha.includes(arr[i])) {
         
// 돌릴필요도 없는게 Indexof는 이미 있는것만 나옴..
          for(let j =0; j<arrAlpha.length; j++) {
               if(arrAlpha[j] === arr[i]){
                    index = j;
               }
               console.log(index)
          }
        result = result + arr.indexOf(arrAlpha[index]) + ' '
     //    console.log(alpha.split(''))
   } else {
    // 없으면 -1
    result = result + '-1 '
   }
//    console.log(result)
}