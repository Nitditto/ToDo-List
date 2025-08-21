const addTodo = (todoList, setTodoList, newTodoObj) => {
    setTodoList([...todoList, newTodoObj])
}

const editTodo = (todoList, setTodoList, todoKey, newTodoObj) => {
    const todoIndex = todoList.findIndex(item=>item.uuid===todoKey)
    todoList[todoIndex] = newTodoObj
    setTodoList(todoList) 
}
const deleteTodo = (todoList, setTodoList, todoKey) => {
    const todo = todoList.find(item=>item.uuid===todoKey)
    todoList = todoList.filter(item=>item!==todo)
    setTodoList(todoList)
}
export {
    addTodo, editTodo, deleteTodo
}