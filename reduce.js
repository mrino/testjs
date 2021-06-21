//reduce
const numbers = [1,2,3,4,5];
let sum = numbers.reduce((acc, cur, idex, arr) =>{
    if(idex === arr.length - 1){
        return (acc +cur) / arr.length;
    }
    return acc + cur;
}, 0);


console.log(sum);