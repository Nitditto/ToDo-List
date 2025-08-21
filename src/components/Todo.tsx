import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "./ui/button";

const Todo = ({ uuid, name, description, dueDate, editOut, setEditOut, setEditCurrent}) => {
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
            id={uuid}
            className="size-8 appearance-none rounded-[5px] border border-gray-400 checked:bg-[url('assets/checked.svg')] checked:bg-size-[70%] checked:bg-center checked:bg-no-repeat"
          />
          <label
            htmlFor={uuid}
            className={`${checked ? "line-through" : ""} ml-4 inline-flex flex-1 text-2xl`}
          >
            {name}
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
            <div className="">{description !== "" ? description : "None"}</div>
            <div className="text-xl">Due:</div>
            <div className="">{dueDate.valueOf() !== 0 ? dueDate.toDateString() : "Never"}</div>
          </div>
          <Button onClick={()=>{
            setEditCurrent({uuid, name, description, dueDate})
            setEditOut(!editOut)
          }} className="p-3 w-[60px] mr-2">
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
