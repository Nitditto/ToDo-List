import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const Todo = () => {
  return (
    <div className=''>
      <div className='mx-auto my-0 border-2 h-16 p-3'>
        <div className="flex justify-center items-center">
          <input type="checkbox" name="checkbox" id="checkbox" className="border-gray-400 size-8 checked:bg-[url('assets/checked.svg')] checked:bg-center checked:bg-size-[70%] checked:bg-no-repeat appearance-none border rounded-[5px] "/>
          <label htmlFor="checkbox" className="flex-1 inline-flex text-2xl ml-4 ">skibidi</label>
          <FaAngleDown className='size-8'/>
        </div>
        
      </div>
      <div className=' my-0 border-2 border-amber-800 p-2 mx-auto h-36'>
        <div className="flex grow h-auto">
          <input type="text" className="text-4xl w-full focus:outline-none focus:ring-0 whitespace-wrap h-full" />
        </div>
      </div>
    </div>
    
  )
}

export default Todo