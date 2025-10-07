"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="min-h-[500] min-w-20 justify-center items-center text-center flex flex-col border-2 border-purple-500">
      {/* <h1 className=" text-white">I am Home Page</h1> */}
      <h2 className="items-center text-center text-2xl p-3 ">Counter</h2>
      <div className="min-h-32 items-center text-center p-3">

      <h4 className="text-xl">{counter}</h4>
      <button
      onClick={() => {setCounter(counter+1)}}
      type="button"
      class="my-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Purple to Pink
      </button>
        </div>
    </div>
  );
}
