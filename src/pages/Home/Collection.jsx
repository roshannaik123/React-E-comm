import React from 'react';
import Heading from './Heading'; 
import { Link } from 'react-router-dom';

import "./Heading.css"
import image1 from "./images/Frame 278.png"

const Collection = () => {
  return (
    <div className="homeLinks">
      <ul>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar" 
     /> 

      <div className="newCollection">
      
  <div className="headingContainer">
  
  <Heading>New<br />Collection</Heading>
   
    <p>Summer</p>
    <p>2023</p>
    <button className='home-btn'>
  <i className="fas fa-shopping-cart"></i> Go to Shop
</button>
    
  </div>
  <div className='images'>
  <img src={image1} alt="New Collection" />
  <img src={image1} alt=""/>
  </div>
  </div>
 
</div>


  );
};

export default Collection;
