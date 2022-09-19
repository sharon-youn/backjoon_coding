const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('예제.txt').toString().split('\n')
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

let T = Number(input[0])

let result = 0;


for(let i = 1; i<=T ; i++){
    // 한줄씩 arr로 받아오기 
    let arr = input[i].split(' ').map(Number)
    // console.log(arr)
    result = 0;

    for(let j =1; j<=arr[0]; j++) {
        // j+1부터 점수 시작 ~ 
        result += arr[j]
        // console.log(result)
     }   

   // 평균 넘는 사람들 filter로 재정비 
let uniqueArr = arr.filter(el => el > result/ arr[0])
// console.log(uniqueArr)
let el = (uniqueArr.length / arr[0] * 100).toFixed(3)
// console.log(el)
// 숫자.toFixed(3) 3번째 자리수까지 나오고 반올림

    console.log(el + '%' )
 
}





