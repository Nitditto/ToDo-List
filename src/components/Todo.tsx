import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "./ui/button";

const Todo = ({ todoName, todoDes, todoDue, editOut,editSetOut }) => {
  const [isopen, setIsopen] = useState(false);
  const toggleDropdown = () => {
    setIsopen(!isopen);
  };
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  
  const handleDelete = (id) => {
    const dataTodoNew = dataTodo.filter(item => item.id !== id);
    setDataTodo(dataTodoNew);
  }
  return (
    <div className="my-6">
      <div className="mx-auto my-0 h-16 border-2 p-3">
        <div className="flex items-center justify-center">
          <input
            onClick={toggleChecked}
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="size-8 appearance-none rounded-[5px] border border-gray-400 checked:bg-[url('assets/checked.svg')] checked:bg-size-[70%] checked:bg-center checked:bg-no-repeat"
          />
          <label
            htmlFor="checkbox"
            className={`${checked ? "line-through" : ""} ml-4 inline-flex flex-1 text-2xl`}
          >
            {todoName}
          </label>
          <FaAngleDown onClick={toggleDropdown} className="size-8" />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-350 ease-out ${
          isopen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-auto border-2 border-amber-800 p-2">
          <div className="flex h-auto flex-col">
            <div className="text-xl">Descprition:</div>
            <div className="">{todoDes}</div>
            <div className="">Due:</div>
            <div className="">{todoDue}</div>
          </div>
          <Button onClick={()=>editSetOut(!editOut)} className="p-3 w-[60px] mr-2">
            Edit
          </Button>
          <Button className="p-3 w-[60px]" variant="destructive">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
