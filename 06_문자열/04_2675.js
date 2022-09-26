const fs = require("fs");
// node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input= require('fs').readFileSync('예제.txt').toString().split('\n')
//require('fs').readFileSync('dev/stdin')
// 예제.txt

// 첫째줄 테스트케이스 개수 T
// 각 테스트케이스 반복 횟수 , 문자열 S가 공백으로 주어짐

// let result =''; -> 반복문 안에다 써도 됨 

for(let i =1; i<= input[0]; i++) {
       // [A,B]가 반복문 안에 들어와서 A만큼 문자 B가 반복
    let [A, B] = input[i].split(' ')
    let result = ''; // 반복문 돌때 result 리셋

    // console.log(A, B )
   for(let j=0; j<B.length;j++){
    result += B[j].repeat(A) 
//    console.log(result)
   }
   console.log(result)
  }

  // 함수를 만들어서 기억하기 좋게 만들어보자! 
  	//배열을 넣으면 문자를 반복해주는 함수
function repetitionMaker(inputCase){
   let repetition = ''
   //2. 바깥쪽 반복문은 입력값의 길이만큼 반복 AAABBBCCC
   for(let j=0; j < inputCase[1].length ; j++){
       //1. 안쪽 반복문은 입력값 문자 하나의 반복 AAA
       for(let i=0; i < inputCase[0]; i++){
           repetition += inputCase[1][j];
       }
   }
   return repetition
}
for(let k=1; k < input.length; k++){
   let inputCase = input[k].split(' ')
   console.log(repetitionMaker(inputCase))
}