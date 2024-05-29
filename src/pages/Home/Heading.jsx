// Heading.js
import React from 'react';
import "./styles/Heading.css";

const Heading = ({ children }) => {
  return(<div>
   <h1 className='head'>{children}</h1>
   </div>
  )
};

export default Heading;
