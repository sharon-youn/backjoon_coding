const fs = require("fs");

const input= fs.readFileSync('예제.txt').toString().trim().split('\n').map(Number)
//require('fs').readFileSync('dev/stdin')
//예제.txt

// 퀵 정렬

let N = input.shift()
// console.log(input)


const result = function quickSort (input, left = 0, right = input.length-1) {
    if(left >= right) {
        // 둘이 같아지면 리턴하라 
        return;
    }

    const mid = Math.floor((left+right)/2)
    const pivot = input[mid] // 중간 인덱스
    const partition = divide(input, left, right, pivot)

    // 왼쪽정렬 재귀함수
    quickSort(input, left, partition-1)
    // 오른쪽 정렬 재귀 함수 
    quickSort(input,partition, right)

    function divide(input, left,right, pivot) {
        while(left <= right) {
            // left가 right 보다 작거나 같을때까지
            while(input[left] < pivot) {
                // input[left]가 중간인덱스보다 작을때까지 반복
                left++
            }
            while(input[right] > pivot) {
                // input[right]가 중간인덱스보다 클때까지 반복
                right++
            }
            if(left <= right) {
                // left가 right 보다 작거나 같다면 
                // left랑 right 위치 바꿈 
                let swap = input[left]
                input[left] = input [right]
                input[right] = swap
                left++;
                right--;
            }

        }
        return left;
    }

return input
}
console.log(result.join('\n'))