import React, { useState } from "react";

export default function App() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (desc && amount) {
      setExpenses([...expenses, { desc, amount: parseFloat(amount) }]);
      setDesc("");
      setAmount("");
    }
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Expense Tracker</h1>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button onClick={addExpense} className="w-full bg-green-500 text-white p-2 rounded mb-4">Add Expense</button>
        <ul className="mb-4">
          {expenses.map((exp, i) => (
            <li key={i} className="flex justify-between py-1 border-b">
              <span>{exp.desc}</span>
              <span>${exp.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="font-bold">Total: ${total.toFixed(2)}</div>
      </div>
    </div>
  );
}