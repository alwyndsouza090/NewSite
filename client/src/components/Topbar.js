import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "../Images/logo.png"
import "bootstrap"

 const Topbar = () => {
  return (
<nav className='topbar container'>
  <div className="navbar-logo">
    <img src={logo} alt="Company Logo" style={{height:'50px'}}/>
  </div>
  <div className="navbar-info">
    <ul>
      <li><NavLink to={"mailto:cephasgranites@gmail.com"} className='mail'><i class="fa-solid fa-envelope"></i> &nbsp;cephasgranites@gmail.com </NavLink></li>
      <li className='timings'><i class="fa-regular fa-timer"></i>&nbsp;Opening Hours: Mon-Sat 9:15am-6:00pm</li>
    </ul>
  </div>
  <div className="navbar-social">
    <ul>
      <li><NavLink to={"https://www.facebook.com/stemsn.leaves/"}><i className="fab fa-facebook"></i></NavLink></li>
      <li><NavLink to={"https://www.instagram.com/_stemsnleaves_/"}><i className="fab fa-instagram"></i></NavLink></li>
    
    </ul>
  </div>
</nav>

  )
}


export default Topbar;