// //비구조화 할당 - 구조분해
// const foo = {a:1, b:2};
// // const {aa, bb} = foo;

// function print({aa, bb}) {
//     console.log(aa);
//     console.log(bb);
// }

// foo

// const arr = [1,2,3];
// const [one, two = 4, three, err = 3] = arr;

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(err);

const foo = {
    state: {
        information: {
            name: 'sdj',
            lang: ['korean', 'dddd']
        }
    },
    value: 5
};

// const {name, lang} = foo.state.information;
// const {value} = foo;
// const v = {
//     name,
//     lang,
//     value
// }

// console.log(foo.value);
// console.log(foo.lang);
// console.log(v);


const {
    state: {
        information : {name, lang}
    },
    value
} = foo;

const v = {
    value,
    name,
    lang
}
console.log(foo.name);