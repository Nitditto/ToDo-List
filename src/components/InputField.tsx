import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const InputField = () => {
  return (
    <div className=' my-0 border-2 w-3xl px-2 items-center flex mx-auto h-16'>
      <div className="flex grow">
        <input type="text" className="text-4xl w-full focus:outline-none focus:ring-0" />
      </div>
      <div className="ml-3.5">
        <BsThreeDots size={36} className=' inline-flex items-center justify-center'/>
      </div>
    </div>
  )
}

export default InputField