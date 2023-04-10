import React from "react";
import Link from "./Link";

const Grid = () => {
  const links = [
    {
      title: "Jenkins",
      description: "Description for Link 1",
      emoji: "🚀"
    },
    {
      title: "Portainer",
      description: "Description for Link 2",
      emoji: "🌟"
    },
    {
      title: "Link 3",
      description: "Description for Link 3",
      emoji: "🌈"
    },
    {
      title: "Link 4",
      description: "Description for Link 4",
      emoji: "🎉"
    },
  ];

  return (

    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 items-center justify-center h-90">
        {links.map((link, index) => (
          <Link key={index} {...link} />
        ))}
      </div>
    </div>


  );
};

export default Grid;
