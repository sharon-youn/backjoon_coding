const fs = require("fs");
// 옆에 있을떈 split(' ')로 하기!! 
const input= fs.readFileSync('dev/stdin').toString().trim().split('\n')
//require('fs').readFileSync('dev/stdin')
//예제.txt

// 점의 개수 num만 일단 빼기 
let num = input.shift()

//2차원 배열로 만들기
const newArr = input.map(el => el.split(' '))
// console.log(newArr)[ ['3', '4'], [...]... ]

newArr.sort((a,b) => {
    // x의 값이 같지않으면 오름차순 
    // console.log(a, b)
    if(a[0] !== b[0]) {
        return a[0] - b[0]
    } else {
        //x의 값이 같으면 y비교
        return a[1] - b[1]
    }
})

let result = ''
// console.log(newArr)

for(let el of newArr) {
    //여기서 console.log 찍으면 시간 에러 
   result += `${el[0]} ${el[1]}\n`
}
console.log(result)