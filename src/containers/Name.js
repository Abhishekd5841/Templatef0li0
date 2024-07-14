import React from "react";
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
const MagicOcean = [
  "Hey, Abhishek Dudpuri here.",
      "I build things for fun and it's my forte.",
      "I love to learn new things.",
];
let index = 0;

export default function Name() {
  const [magicName, setMagicName] = useState("Hey, Abhishek Dudpuri here.");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 2 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 1500);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    }
  );
  return (
    <div className="App">
      <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16 text-black dark:text-gray-200 m-10">
          <span className="mr-3 font-outfit text-black dark:text-gray-200 ">{name}</span>|
        </h1>
    </div>
  );
}

