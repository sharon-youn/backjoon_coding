const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다
// 출력이 다음 줄에 있을땐 split('\n')으로 하고 
// 옆에 있을떈 split(' ')로 하기!! 
const input = require('fs').readFileSync('dev/stdin').toString().trim();
//require('fs').readFileSync('dev/stdin')


function selfNum() {
    let dn;
    let arr = [];
    // d(n)이 한자리수일때 등등 으로 나누기 
    for(let n=0; n<10000; n++) {
        if(0<n && n<10) dn = 2*n
        else if(10<=n && n<100) dn = n+Math.floor(n/10) + n%10
        else if(100<=n && n<1000)  dn = n+Math.floor(n/100)+Math.floor((n%100)/10)+ n%10
        else if(1000<=n && n<10000) dn = n+Math.floor(n/1000)+Math.floor((n%1000)/100)+Math.floor((n%100)/10) +  n%10
        else dn = 10001 // n이 10000일때
        arr.push(dn)
    }
    // arr에 해당되지 않는 것만 출력
   for(let i=1; i<=10000;i++) {
    if(arr.indexOf(i) === -1){
        console.log(i)
    }
   }

}

selfNum()