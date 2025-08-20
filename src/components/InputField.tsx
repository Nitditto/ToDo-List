import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const InputField = () => {
  return (
    <div className=' my-0 border-2 w-3xl px-1.5 justify-between items-center flex mx-auto'>
      <div className="flex grow">
        <input type="text" className=" w-full focus:outline-none focus:ring-0" />
      </div>
      <div className="">
        <BsThreeDots className='inline-flex items-center justify-center'/>
      </div>
    </div>
  )
}

export default InputField