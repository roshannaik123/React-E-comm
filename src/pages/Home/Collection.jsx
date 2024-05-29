import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

import "./styles/Heading.css";
import image1 from "./images/Frame 278.png";

const Collection = () => {
  return (
    <div className="homeLinks container-fluid">
      <div className="row ms-1">
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
      </div>

      <div className="row">
        <div className="col-md-6">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col-md-6">
          <div className="headingContainer">
            <Heading>
              New
              <br />
              Collection
            </Heading>

            <p>Summer</p>
            <p>2023</p>
            <button className=" home-btn p-2">
              <i className="fas fa-shopping-cart"></i> Go to Shop
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <img src={image1} alt="New Collection" />
            </div>

            <div className="col-md-6">
              <img src={image1} alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
