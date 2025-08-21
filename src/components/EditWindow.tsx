import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
import { addTodo, editTodo } from "../lib/todoUtils"
const EditWindow = ( {current, setCurrent, todoList, setTodoList, out, setOut} ) => {

  const toggleOut = () => {
    setOut(!out);
  };
  return (
    <>
      {out && (
        <div className="flex justify-center items-center">
          <div onClick={toggleOut} className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"></div>
          <div className="fixed w-[500px] top-[20%] z-50 flex items-center justify-center">
            <div className="w-[500px] rounded-lg bg-white p-6 text-black shadow-lg">
              <div className="">Current todo:{current.uuid}</div>
              <div className="">Description:</div>
              <textarea
                name=""
                id=""
                rows={5}
                placeholder=""
                className="w-full"
                onChange={e=>setCurrent({...current, description: e.target.value})}
              >{current.description}</textarea>
              <div className="flex items-start justify-between border-2">
                <div className="flex items-center text-2xl">{`Due: ${current.dueDate.valueOf()!==0?current.dueDate.toDateString():"Never"}`}</div>
                <Calendar
                  mode="single"
                  onSelect={date=>setCurrent({...current, dueDate: date})}
                  startMonth={new Date(Date.now())}
                  captionLayout="dropdown"
                  fixedWeeks={true}
                  className="h- w-[50%] p-0"
                />
              </div>
              <div className="flex items-center space-x-2 justify-end mt-2">
                <Button onClick={()=>setOut(!out)}variant="destructive">Cancel</Button>
                <Button onClick={()=>(todoList.findIndex(i=>i.uuid===current.uuid) !== -1 ? editTodo(todoList, setTodoList, current.uuid, current) : addTodo(todoList, setTodoList, current),setOut(!out))}>Accept</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditWindow;
