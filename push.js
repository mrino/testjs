const arr = [1,2,3,4,5,6,7,8,9,10];
//push: 오른쪽 끝
//unshift: 왼쪽 끝
//pop: 오른쪽 끝 추출
//shift: 왼쪽 끝 추출

arr.push(11);
arr.unshift(0)

const value = arr.pop();
console.log(value);
const value2 = arr.shift();
console.log(value2);
console.log(arr);