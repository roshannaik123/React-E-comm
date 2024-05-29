import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row mx-2  py-2 mt-4 fs-4 justify-content-start">
        <div className="col-md-1 fs-1">
          <i className="bi bi-filter-left"></i>
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col auto-width">
            <div className="auto-width">
              <Link>Home</Link>
            </div>
            </div>
            <div className="col">
            <div className="auto-width">
              <Link>Collection</Link>
            </div>
            </div>
            <div className="col"><div className="auto-width">
              <Link>New</Link>
            </div></div>
          </div>
           
            
            
        </div>

        <div className="col-md-2"></div>
        <div className="col-md-2"></div>


        <div className="col-md-3 ">
          <div className="d-flex justify-content-between align-items-center">
            <div >
              <Link>
                <span className="rightnav">
                  <i className="bi bi-heart"></i>
                </span>
              </Link>
            </div>
            <div >
              <Link>
                <span className="rightnav rightcart">
                  <i className="bi bi-cart3"></i>
                </span>
              </Link>
            </div>
            <div >
              <Link>
                <span className="rightnav">
                  <i className="bi bi-person-fill"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
