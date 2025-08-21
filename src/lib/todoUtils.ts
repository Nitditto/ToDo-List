const addTodo = (todoList, setTodoList, newTodoObj) => {
    setTodoList([...todoList, newTodoObj])
}

const editTodo = (todoList, setTodoList, todoKey, newTodoObj) => {
    const todoIndex = todoList.findIndex(i=>i.uuid===todoKey)
    todoList[todoIndex] = newTodoObj
    setTodoList(todoList) 
}
const deleteTodo = (todoList, setTodoList, todoKey) => {
    const todoIndex = todoList.findIndex(i=>i.uuid===todoKey)
    todoList.splice(todoList[todoIndex], 1)
    setTodoList(todoList)
}
export {
    addTodo, editTodo, deleteTodo
}