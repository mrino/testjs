//indexOf

const animal = ['dog', 'cat', 'horse', 'rabbit'];
const index = animal.indexOf('cat');
console.log(index);

//findIndex 배열안에 객체가 있거나 배열이 있거나

const todolist = [
    {'id': 1, 'text': '숙제', 'done': true},
    {'id': 2, 'text': '공부', 'done': false},
    {'id': 3, 'text': '게임', 'done': true}
];

const index2 = todolist.findIndex(todo => todo.id === 3);

console.log(index2);
