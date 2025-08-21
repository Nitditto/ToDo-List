import { useState } from 'react'
import InputField from './components/InputField'
import Todo from './components/Todo'
import EditWindow from './components/EditWindow'

function App() {
  const [todo, setTodo] = useState([])
  const addTodo = e => {
    setTodo([...todo, e])
  }
  const [out, setOut] = useState(true);
  return (
    <>
      <InputField addTodo={addTodo} editOut={out} editSetOut={setOut}/>
      <div className="mx-auto my-3 w-3xl py-2 px-2 border-2 ">
        {todo.map((i, index) => 
           <Todo editOut={out} editSetOut={setOut} todoName={i['name']} todoDes={i['des']} todoDue={i['due']} key={index} />
        )}
      </div>
      <EditWindow editOut={out} editSetOut={setOut}/>
    </>
  )
}

export default App
