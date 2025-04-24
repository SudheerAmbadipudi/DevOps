import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
          <input
            className="flex-grow p-2 border rounded-l-xl"
            type="text"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 rounded-r-xl"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2 p-2 bg-gray-50 rounded-xl shadow-sm"
            >
              <span
                className={`flex-grow cursor-pointer ${task.done ? "line-through text-gray-400" : ""}`}
                onClick={() => toggleDone(index)}
              >
                {task.text}
              </span>
              <button
                className="text-red-500 ml-4"
                onClick={() => removeTask(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}