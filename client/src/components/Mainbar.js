import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import "bootstrap"
import CustomModal from '../pages/Admin';
import { Navbar, Nav, Button } from 'react-bootstrap';
function Mainbar() {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }


// Admin Modal page

const [showModal, setShowModal] = useState(false);

const handleModalClose = () => setShowModal(false);
const handleModalShow = () => setShowModal(true);
// ---------------------





  return (
    <nav className='mainbar'>
        <div className='nav-container'>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li  className="nav-item"><NavLink  exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Home</NavLink></li>
         <li  className="nav-item"><NavLink  exact
                to="/Company"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Company</NavLink></li>
                  

<li>
          <NavLink to="#" onClick={toggleDropdown} className='drophead'>AboutUs&nbsp;<i class="fa-solid fa-angle-down"></i></NavLink>
          {showDropdown && (
            <ul className='dropdown'>
              <li  className="nav-item"><NavLink  exact
                to="/AboutUs/PrivacyPolicy"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>PrivacyPolicy</NavLink></li>
              <li  className="nav-item"><NavLink  exact
                to="/AboutUs/Terms&Conditions"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>Terms & Conditions</NavLink></li>
               <li  className="nav-item"><NavLink  exact
                to="/AboutUs/Disclaimer"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>Disclaimer</NavLink></li>
            </ul>
          )}
        </li>

        <li  className="nav-item"><NavLink  exact
                to="/Process"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Process</NavLink></li>

                   <li  className="nav-item"><NavLink  exact
                to="/Projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Projects</NavLink></li>
                   <li  className="nav-item"><NavLink  exact
                to="/Infra"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Infrastructure</NavLink></li>
        <li>
          <NavLink to="#" onClick={toggleDropdown} className='drophead'>Products&nbsp;<i class="fa-solid fa-angle-down"></i></NavLink>
          {showDropdown && (
            <ul className='dropdown'>
              <li  className="nav-item"><NavLink  exact
                to="/Products/AllProducts"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>AllProducts</NavLink></li>
              <li  className="nav-item"><NavLink  exact
                to="/Products/AbsoluteBlack"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>AbsoluteBlack</NavLink></li>
               <li  className="nav-item"><NavLink  exact
                to="/Products/JetBlack"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>JetBlack</NavLink></li>
     <li  className="nav-item"><NavLink  exact
                to="/Products/ViscountSilver"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>ViscountSilver</NavLink></li>
              <li  className="nav-item"><NavLink  exact
                to="/Products/BelmanBeauty"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>BelmanBeauty</NavLink></li>
                  <li  className="nav-item"><NavLink  exact
                to="/Products/ZubranaCoorg"
                activeClassName="active"
                className="drop_navlink"
                onClick={handleClick}>ZubranaCoorg</NavLink></li>


            </ul>
          )}
        </li>

        <li  className="nav-item"><NavLink  exact
                to="/Gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Gallery</NavLink></li>



<li  className="nav-item"><NavLink  exact
                to="/ContactUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>ContactUs</NavLink></li>
<li  className="nav-item">
<Navbar>
        <h5
        onClick={handleModalShow} >
        Admin
        </h5>
        <CustomModal
        show={showModal}
        handleClose={handleModalClose}
        />
</Navbar>
    </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
      </div>
    </nav>
  );
}

export default Mainbar;
