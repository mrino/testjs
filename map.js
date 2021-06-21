// map
// 배열 내장 함수
// 배열 안 각 원소들을 일괄적으로 사용하고 싶을때

const arr = [1,2,3,4,5,6,7,8,9,10];
// const squred = arr.map(n => n*n);


// for(let i = 0; i<arr.length; i++){
//     squred.push(arr[i] * arr[i]);
// }

// arr.forEach(n => {
//     squred.push(n*n);
// })

console.log(arr.map(n => n*n));
