import { observable, action, computed } from 'mobx'

class ToDos {
    @observable todos = []

    @action addToDo = (todo) => {
        this.todos.push(todo)
    }

    @computed get todoCount() {
        return this.todos.length
    }
}

const store = new ToDos()
export default store