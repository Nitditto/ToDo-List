import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
      <InputField/>
      <div className="mx-auto my-3 justify-center items-center w-3xl py-2 px-2 border-2">
        <Todo/>
      </div>
      
    </>
  )
}

export default App
