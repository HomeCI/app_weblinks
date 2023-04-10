import React from "react";
import classnames from "classnames";

const Link = ({ title, description, emoji }) => {
  const gradients = [
    "bg-gradient-to-tr from-red-500 to-yellow-500",
    "bg-gradient-to-tr from-green-500 to-blue-500",
    "bg-gradient-to-tr from-pink-500 to-purple-500",
    "bg-gradient-to-tr from-yellow-500 to-orange-500",
    "bg-gradient-to-tr from-purple-500 to-blue-500",
    "bg-gradient-to-tr from-red-500 to-pink-500",
    "bg-gradient-to-tr from-blue-500 to-green-500",
    "bg-gradient-to-tr from-yellow-500 to-green-500",
    "bg-gradient-to-tr from-pink-500 to-red-500",
    "bg-gradient-to-tr from-purple-500 to-pink-500",
    "bg-gradient-to-tr from-green-500 to-yellow-500",
    "bg-gradient-to-tr from-blue-500 to-purple-500",
    "bg-gradient-to-tr from-red-500 to-orange-500",
    "bg-gradient-to-tr from-pink-500 to-blue-500",
    "bg-gradient-to-tr from-yellow-500 to-pink-500",
    "bg-gradient-to-tr from-green-500 to-purple-500",
    "bg-gradient-to-tr from-purple-500 to-red-500",
    "bg-gradient-to-tr from-blue-500 to-yellow-500",
    "bg-gradient-to-tr from-orange-500 to-green-500",
  ];

  const gradientClass = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <a
      href="#"
      className={classnames(
        "relative block w-60 h-40 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out m-4",
        gradientClass
      )}
    >
      <div className="absolute bottom-0 w-full p-6 text-center bg-gray-900 bg-opacity-10 rounded-b-lg">
        <div className="text-4xl">{emoji}</div>
        <div className="mt-2 text-xl font-bold">{title}</div>
        <div className="mt-2 text-gray-300 font-mono">{description}</div>
      </div>
    </a>
  );
};

export default Link;
