import React, { useState, useRef } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Todo from "./Todo"
const InputField = ( {addTodo, editOut, editSetOut} ) => {
  const [todoName, setTodoName] = useState("")
  const handelKeyDown=(event)=>{
    if(event.key=="Enter" && todoName.trim()!==""){
        addTodo({name: todoName, des: "None", due: 'None'})
        setTodoName("")
    }
  }
  
  return (
    <div className=' my-0 border-2 w-3xl px-2 items-center flex mx-auto h-16'>
      <div className="flex grow">
        <input value={todoName} onChange={e=>setTodoName(e.target.value)} onKeyDown={handelKeyDown} type="text" className="text-4xl w-full focus:outline-none focus:ring-0" />
      </div>
      <div className="ml-3.5">
        <BsThreeDots onClick={()=>todoName.trim()!==""?editSetOut(!editOut):""} size={36} className=' inline-flex items-center justify-center'/>
      </div>
    </div>
  )
}

export default InputField