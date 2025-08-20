import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Todo = ({ todoName, todoDes, todoDue }) => {
  const [isopen, setIsopen] = useState(false);
  const toggleDropdown = () => {
    setIsopen(!isopen);
  };
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
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
          <button className="rounded-[8px] bg-blue-300 p-2.5 text-white">
            Edit
          </button>
          <button className="rounded-[8px] bg-red-300 p-2.5 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
