import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, multiply, divide, selectCount } from "./counterSlice";

export function Counter() {
  const calValue = useSelector(selectCount);
  const dispatch = useDispatch();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [activeInput, setActiveInput] = useState("input1"); // Track active input

  const handleNumberClick = (num) => {
    if (activeInput === "input2") {
      setInput2(input2 + num);
    } else if (input1 === "" || input2 === "") {
      setInput1(input1 + num);
      setInput2("");
    } else {
      setInput2(input2 + num);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <span className="text-2xl font-bold">Result: {calValue}</span>
        </div>
        <div className="mb-4 flex space-x-2">
          <input
            className="border rounded px-2 py-1 flex-1"
            placeholder="Enter value"
            value={input1}
            onChange={(e) => {
              setInput1(e.target.value);
            }}
            onClick={() => {
              setActiveInput("input1"); // Set active input to input1 when clicked
            }}
          />
          <input
            id="input2"
            className="border rounded px-2 py-1 flex-1"
            placeholder="Enter value"
            value={input2}
            onChange={(e) => {
              setInput2(e.target.value);
            }}
            onClick={() => {
              setActiveInput("input2"); // Set active input to input2 when clicked
            }}
          />
        </div>
        <div className="mb-2 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              onClick={() => handleNumberClick(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-0 px-32">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded col-span-3"
            onClick={() => handleNumberClick(0)}
          >
            0
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4 mt-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded col-span-1"
            onClick={() => dispatch(add({ input1, input2 }))}
          >
            Add
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded col-span-1"
            onClick={() => dispatch(subtract({ input1, input2 }))}
          >
            Subtract
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded col-span-1"
            onClick={() => dispatch(multiply({ input1, input2 }))}
          >
            Multiply
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded col-span-1"
            onClick={() => dispatch(divide({ input1, input2 }))}
          >
            Divide
          </button>
        </div>
      </div>
    </div>
  );
}
