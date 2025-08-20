import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
const EditWindow = ( {editOut, editSetOut} ) => {
  const [date, setDate] = useState(new Date());
  const toggleOut = () => {
    editSetOut(!editOut);
  };
  return (
    <>
      {!editOut && (
        <div className="flex justify-center items-center">
          <div onClick={toggleOut} className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"></div>
          <div className="fixed w-[500px] top-[20%] z-50 flex items-center justify-center">
            <div className="w-[500px] rounded-lg bg-white p-6 text-black shadow-lg">
              <div className="">Description:</div>
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="...."
                className="w-full"
              ></textarea>
              <div className="flex items-start justify-between border-2">
                <div className="flex items-center text-2xl">{`Due: ${date.toDateString()}`}</div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  startMonth={new Date(Date.now())}
                  captionLayout="dropdown"
                  fixedWeeks={true}
                  className="h- w-[50%] p-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditWindow;
