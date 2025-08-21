import { useState, useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { v4 as uuidv4 } from "uuid"
import { addTodo } from "../lib/todoUtils"

const InputField = ( {TodoList, setTodoList, editOut, setEditOut, editCurrent, setEditCurrent} ) => {
  
  const [todo, setTodo] = useState({
    uuid: uuidv4(),
    name: "",
    description: "",
    dueDate: new Date(0)
  })
  //  console.log(todo)
  useEffect(() => setEditCurrent(todo), [todo])
  const handelKeyDown=(event)=>{
    if(event.key=="Enter" && todo.name.trim()!==""){
      addTodo(TodoList, setTodoList, todo)
      setTodo({...todo, name:"", uuid: uuidv4()})
    }
  }
  
  return (
    <div className=' my-0 border-2 w-3xl px-2 items-center flex mx-auto h-16'>
      <div className="flex grow">
        <input value={todo.name} onChange={e=>setTodo({...todo, name:e.target.value})} onKeyDown={handelKeyDown} type="text" className="text-4xl w-full focus:outline-none focus:ring-0" />
      </div>
      <div className="ml-3.5">
        <BsThreeDots onClick={()=>{
          if (todo.name.trim() !== "") {
            setTodo({...todo, uuid: uuidv4()})
            setEditOut(!editOut)
          }
        }} size={36} className=' inline-flex items-center justify-center'/>
      </div>
    </div>
  )
}

export default InputField