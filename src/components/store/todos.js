import {makeAutoObservable} from 'mobx'

class todoStore {

    todos = [{label: "Going to learn React", important: false, liked: false, id: 1},
        {label: "That is so good", important: false, liked: false, id: 2},
        {label: "I need a break...", important: false, liked: false, id: 3}]

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todoLabel) {
        const lastId = this.todos[this.todos.length - 1].id;
        const newTodo = {
            label: todoLabel,
            id: lastId + 1,
            important: false,
            liked: false
        }
        this.todos.push(newTodo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)

    }

    changeLike(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {
            ...todo, liked: !todo.liked
        } : todo)
    }

    changeImportant(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {
            ...todo, important: !todo.important
        } : todo)
    }


}

export default new todoStore();