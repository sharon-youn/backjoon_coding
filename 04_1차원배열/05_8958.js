const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.
// +str = num
let T = +input[0]

// 여기에 쓸필요 없이 for문에 넣으면 될듯 
// let result = 0;
// let count = 0


for(let i = 1; i<=T ; i++){
    // 일단 i = 1부터 T 개수와 작거나 같을때 까지 
    // 한줄씩 arr로 받아오기 
     //꼭 초기화
   let result = 0 
    let  count = 0

    let arr = input[i].split('')

    for(let j =0; j<arr.length; j++) {
        // arr 중에 O 가 있으면 
        if(arr[j] === 'O') {
            // count를 먼저 플러스시키면 그 아래 식이 더 간단해짐
            // count++
            // result += count
            result += 1 + count
            count+=1
        } // arr가 X면 count 다시 0 으로만들어주기
        else  {count = 0;}
     }   
    console.log(result)
   
}





