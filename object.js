//객체와 프로토 타입
// function A(name, age) {
//     this.name = name;
//     this.age = age;
//     this.hello = () => {console.log("hello");}
// }

// const b = new A();
// const c = new A("rrr", 333);

// console.log(c.age);
// c.hello();


function Aniaml(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Aniaml.prototype.say = function() {
    console.log(this.say);
}

Aniaml.prototype.sharedValue = 1;


const dog = new Aniaml('개', "누렁이", "멍멍");
const cat = new Aniaml('고양이', "나비", "야옹");
console.log(dog);
console.log(cat);
dog.sharedValue = 10;
cat.sharedValue = 20

//프로토타입 prototype -> 클래스 매서드