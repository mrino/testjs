// // Object
// // 여러 종류의 값을 저장/관리
// // js Object <-> json

// const dog = {
//     name: '왈도',
//     age: 2,
//     print3: function say() {
//         console.log("왈");
//     },
//     print4: function () {
//         console.log("왈");
//     },
//     print5: () => {
//         //this 사용 불가
//         console.log("왈");
//     }
// }


// //방법 1
// function print(str) {
//     const {name, age} = str; //객체의 비구조화 할당
//     const text = `${name}(은)는 ${age}살이다 `;
//     console.log(text);
// }
// //방법 2
// function print2({name, age}) {
//     const text = `${name}(은)는 ${age}살이다 `;
//     console.log(text);
// }

// print(dog);
// print2(dog);

// dog.print3();
// dog.print4();
// dog.print5();

// //Getter/ Setter -> 보안(캡슐화)
// //자바 관심 생기면 롬복 해보기 "3rd library" 

// const num = {
//    _a: 1,
//    _b: 2,
//    sum: 3,
//    calculate() {
//        console.log("계산");
//        this.sum = this._a + this._b;
//    },
//    //get 정보를 가져올때 실행
//    get a() {
//        console.log("get a");
//        return this._a;
//    },
//    //set 값이 변경될때 실헹
//    set a(val){
//        console.log("값 바뀜");
//        this._a = val;
//        this.calculate()
//    }
// }

// num.a = 10;
// console.log(num.sum);

// // 배열

// const object = [
//     {
//         nam: "고양이"
//     },
//     {
//         nam: "원숭이"
//     }
// ];

// console.log(object[1]["nam"]);

// object.push("ddd");
// console.log(object);

// // 반복문

// let numbers = [1,2,3,4,5,6,7];

// for(let i of numbers){
//     console.log(i);
// }

// // 객체 + for 

// const hou = {
//     name: "호무",
//     sound: "호우",
//     age: 4
// }

// for(let key in hou){
//     console.log(`${key} : ${hou[key]}`);
// }
// function sumof(number) {
//     let sum = 1;
//     for(let i = 0; i<number.length; i++){
//         let num = number[i];
//         sum = num + sum;
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sumof(numbers));

// const alp = ['a','a','a','a','a','a','a','a','b','c','c','d','e'];

// const count = alp.reduce((acc, cur) => {
//     if(acc[cur]){ //acc['a'] === acc.a
//         acc[cur] += 1;

//     } else{
//         acc[cur] = 1;// 값이 처음으로 돌아옴
//     }
//     return acc;
// }, {});

// console.log(count);

// function countBigger(number) {
//     number.forEach(n => {
//         let num = 0;
//         if(n => 10){
//             num++;
//             if(num < number.legth){
//                 return n;
//             }
            
//         }
        
//     });
// }

// const count = countBigger([1,2,3,4,5,6,10,20,30,40,50])

// console.log(count);

function countBigger(numbers) {
    // return numbers.filter(n => n>10).length;
    
    // return numbers.reduce((acc, cur) =>{
    //     if(cur > 10){
    //         return acc+1;
    //     } else{
    //         return acc;
    //     }
    // }, 0)
}


const count = countBigger([1,2,3,4,5,6,10,20,30,40,50]);