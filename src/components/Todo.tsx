import { useState } from "react";
import { FaAngleDown, FaRegEdit, FaTrash } from "react-icons/fa";
import { Button } from "./ui/button";
import { deleteTodo, checkDueDate } from "@/lib/todoUtils";

const Todo = ({
  uuid,
  name,
  description,
  dueDate,
  editOut,
  setEditOut,
  setEditCurrent,
  todoList,
  setTodoList,
}) => {
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
        <div className="group flex items-center justify-between">
          <input
            disabled={checkDueDate(todoList, uuid) ? true : undefined}
            onClick={toggleChecked}
            type="checkbox"
            name="checkbox"
            id={uuid}
            className="size-8 appearance-none rounded-[5px] border border-gray-400 checked:bg-[url('assets/checked.svg')] checked:bg-size-[70%] checked:bg-center checked:bg-no-repeat"
          />
          <label
            htmlFor={uuid}
            className={`${checked ? "line-through text-green-600" : ""} ml-4 line-clamp-1 inline-flex flex-1 text-2xl ${checkDueDate(todoList, uuid) ? "text-red-500 line-through" : ""}`}
          >
            {name}
          </label>
          <div className="ml-4 flex items-center space-x-2">
            <FaRegEdit
              onClick={() => {
                setEditCurrent({ uuid, name, description, dueDate });
                setEditOut(!editOut);
              }}
              className="hidden size-7 cursor-pointer group-hover:block"
            />
            <FaTrash
              onClick={() => {
                deleteTodo(todoList, setTodoList, uuid);
              }}
              className="hidden size-6 cursor-pointer group-hover:block"
            />
            <FaAngleDown onClick={toggleDropdown} className="size-8" />
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-350 ease-out ${
          isopen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-auto border-2 border-amber-800 p-2">
          <div className="flex h-auto flex-col">
            <div className="text-xl break-words">Name: {name}</div>
            <div className="text-xl">Descprition:</div>
            <div className="text-xl break-words">
              {description !== "" ? description : "None"}
            </div>
            <div className="text-xl">Due:</div>
            <div className="text-xl">
              {dueDate.valueOf() !== 0 ? dueDate.toDateString() : "Never"}
            </div>
          </div>
          <Button
            onClick={() => {
              setEditCurrent({ uuid, name, description, dueDate });
              setEditOut(!editOut);
            }}
            className="mr-2 w-[60px] p-3"
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              deleteTodo(todoList, setTodoList, uuid);
            }}
            className="w-[60px] p-3"
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
