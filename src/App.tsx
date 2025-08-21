import { useState } from 'react'
import InputField from './components/InputField'
import Todo from "./components/Todo"
import EditWindow from "./components/EditWindow"
function App() {
  const [todo, setTodo] = useState([])
  const [out, setOut] = useState(false);
  const [current, setCurrent] = useState({})
  return (
    <>
      <InputField editCurrent={current} setEditCurrent={setCurrent} TodoList={todo} setTodoList={setTodo} editOut={out} setEditOut={setOut}/>
      <div className="mx-auto my-3 w-3xl py-2 px-2 border-2 ">
        {todo.map(i => 
            <Todo 
              uuid={i['uuid']}
              key={i['uuid']}
              name={i['name']}
              description={i['description']}
              dueDate={i['dueDate']}
              editOut={out} 
              setEditOut={setOut} 
              editCurrent={current}
              setEditCurrent={setCurrent}
              todoList={todo}
              setTodoList={setTodo}
              />
          )}
      </div>
      <EditWindow current={current}
      setCurrent={setCurrent} todoList={todo} setTodoList={setTodo} out={out} setOut={setOut} />
    </>
  )
}

export default App
