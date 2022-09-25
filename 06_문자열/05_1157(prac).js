const fs = require("fs");

const input= require('fs').readFileSync('dev/stdin').toString().trim().toUpperCase()

// 답은 나오나 백준에서는 틀렸다고 나옴

// 첫째줄에 가장 많이 사용된 알파벳을 대문자로 출력 
// 가장 많이 사용된 알파벳이 여러개인 경우는 ?
let str = input.split('').map(value => value + '');
 
let obj = {}
let max = '';
let count = 0;

// 알파벳 key에 담고 value에 반복되는 횟수 담기
for(let i =0; i< str.length; i++) {
    // char에 str[i] 담기
    let char = str[i]; 
    // obj에 key값으로 char , value로 반복횟수 
    if(obj[char]) {
        // 있으면 1 증가
        obj[char]++;
    } else {
       // 없으면 obj에 char : 1 생성
        obj[char] = 1; 
    }
}

for(let key in obj) {
    // obj의 key 반복문 
    if(count < obj[key]){
        // obj[key] 가 더 크면 
        // count로 비교
        count = obj[key]
        // max에 key 담기
        max = key

    } else if (count === obj[key]){
        // 그전 max === obj[key]로 해놈.. ㅎ 
        // 여기에서 Max랑 obj[key]를 비교하면 안되고..
        // value값인 count랑 비교해야지!!! -> 이거때문에 계속 틀림
    // 반복되는 알파벳이 여러개인 경우 
       max = "?"
    }
}
console.log(max)