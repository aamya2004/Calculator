import React, { useState } from "react";
import MainDisplay from "./Components/MainDisplay";

const Container = () => {
  const express = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "+",
    "=",
  ];

  const [strs, setStr] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (str) => {
    if (str === "=") {
      const calculated = eval(strs);
      setResult(calculated);
      setStr(calculated.toString());
    } else {
      setStr((prevStr) => prevStr + str);
    }
  };

  return (
    <div className="bg-gray-600 w-[25rem] h-[500px] m-auto rounded-lg">
      <div className="bg-green-200 w-[22rem] h-[100px] mx-6">
        <MainDisplay str={strs} />
      </div>
      <div className="bg-white w-[22rem] h-[350px] mx-6 mt-10 grid gap-4 grid-cols-4 grid-rows-4">
        {express.map((str, index) => (
          <button
            key={index}
            onClick={() => handleClick(str)}
            className="bg-black text-white"
          >
            {str}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Container;
