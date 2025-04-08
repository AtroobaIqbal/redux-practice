import React from "react";
import { useSelector } from "react-redux";

const TaskDetails = () => {
  const { task, category, description } = useSelector((state) => state.task);

  return (
    <div className="max-w-4xl mx-auto mt-10 border rounded shadow">
      <div className="grid grid-cols-3 border-b bg-gray-100 font-semibold">
        <div className="p-4 border-r">Task</div>
        <div className="col-span-2 p-4">{task}</div>
      </div>

      <div className="grid grid-cols-3 border-b bg-gray-100 font-semibold">
        <div className="p-4 border-r">Category</div>
        <div className="col-span-2 p-4">{category}</div>
      </div>

      <div className="grid grid-cols-3 bg-gray-100">
        <div className="p-4 font-semibold border-r">Description</div>
        <div className="col-span-2 p-4 space-y-2 bg-white">
          <ul className="list-disc list-inside space-y-1">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
