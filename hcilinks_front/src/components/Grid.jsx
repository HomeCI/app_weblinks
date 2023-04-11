import React, { useState, useEffect } from 'react';
import Link from "./Link";
import axios from 'axios';


const Grid = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    axios.get(`${apiUrl}/api/links`)
      .then(res => {
        console.log(res)
        setLinks(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (

    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 items-center justify-center h-90">
        {links.map((link) => (
          <Link key={link.id} {...link} />
        ))}
      </div>
    </div>


  );
};

export default Grid;
