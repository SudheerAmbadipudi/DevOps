import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">To-Do List</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 p-2 border rounded"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((t, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-200 p-2 rounded">
              <span>{t}</span>
              <button onClick={() => deleteTask(i)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}