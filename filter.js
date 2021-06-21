//fitter
// 배열 내장함수
const todolist = [
    {'id': 1, 'text': '숙제', 'done': true},
    {'id': 2, 'text': '공부', 'done': false},
    {'id': 3, 'text': '게임', 'done': true}
];

const taskNotDone = todolist.filter(todo => todo.done === true);
console.log(taskNotDone);