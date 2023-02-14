import React from "react";
// TODO: replace with react-bootstrap/Navbar
//     https://react-bootstrap.netlify.app/components/navbar/
// import Navbar from 'react-bootstrap/Navbar';
// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css";
 import "../App.scss"
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function MyNavbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
       <NavLink className="navbar-brand" to="/">
        <div className="vstack  ms-auto robot love">
          <div>
            <i class="bi bi-robot fs-1 text-primary"></i>&nbsp;&nbsp;
            <i class="bi bi-heart fs-2 text-secondary"></i>
          </div>
          <div className="gap-neg-1 lh-1">
            <span class="fs-6 text-secondary">Robot </span>
            <span class="fs-6 ">Love</span>
          </div>
        </div>
       {/* <div>
          <span className="vstack robot love  lh-5">
            <i class="bi bi-robot fs-1 text-primary gap-neg-1"></i>
            <span class="fs-6 text-secondary gap-neg-2">Robot</span>
          </span>
          
          <span className="vstack robot love lh-2">
            <span class="" style={{marginBottom: '3px !important', fontSize: '1.9rem !important'}}>Love</span>
            <i class="bi bi-heart text-secondary gap-neg-2 lh-3" style={{fontSize: '1.75rem !important'}}></i>
          </span>
          
       </div> */}
       
       {/* <i class="bi bi-share-fill fs-5 text-info"></i> */}
       
       {/* <i class="bi bi-terminal-split fs-3 text-success"></i> */}
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <i class="bi bi-list text-primary fs-1"></i>
       </button>
       <div class="d-flex">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="recordList/create">
              <i class="bi bi-plus-square text-info"></i> Create Record
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/spelling">
              <i class="bi bi-behance text-info"></i> Spelling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sample/form">
              <i class="bi bi-flag text-info"></i> Example Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sample/colors">
              <i class="bi bi-airplane-engines text-info"></i> Sample Colors
              </NavLink>
            </li>
            <li>
            <button type="button" class="btn btn-secondary position-relative shadow-lg">
    New <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">+99 <span class="visually-hidden">unread messages</span></span>
  </button>
            </li>
          </ul>
          </div>
        </div>
       </div>
     </nav>
   </div>
 );
}