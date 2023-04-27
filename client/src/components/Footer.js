import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';
import whatsapp from "../Images/whatsapp/Whatsapp.png"

function Footer() {
  return (
    
    <footer className='' >
      <div className="footer-columns">
        <div className="column1">
          <h4>CEPHAS GRANITES</h4>
          <p>#R34 Industrial Estate, Kadalakere Marpady Village Alangar Moodabidre - 574227 Karnataka INDIA</p>
          <p>Phone:+91 9480696046</p>
          <p>Email: cephasgranites@gmail.com</p>
        </div>
        <div className="column2">
          <h4>Information</h4>
          <ul>
          <NavLink to='/Company' className='footnav'> <li>Company</li></NavLink>
          <NavLink to='/Projects' className='footnav'> <li>Projects</li></NavLink>
          <NavLink to='/Process' className='footnav'> <li>Process</li></NavLink>
          <NavLink to='/Infra' className='footnav'> <li>Infrastructure</li></NavLink>
          </ul>
        </div>
        <div className="column3">
          <h4>Our Products</h4>
          <ul>
          <NavLink to='/Products/AbsoluteBlack' className='footnav'> <li>Absolute Black</li></NavLink>
          <NavLink to='/Products/ViscountSilver' className='footnav'> <li>Viscount Silver</li></NavLink>
          <NavLink to='/Products/JetBlack' className='footnav'> <li>Jet Black</li></NavLink>
          <NavLink to='/Products/BelmanBeauty' className='footnav'> <li>Belman Beauty</li></NavLink>
          <NavLink to='/Products/ZubranaCoorg' className='footnav'> <li>Zubrana Coorg</li></NavLink>
          </ul>
        </div>
        <div className="column4">
          <h4>Our Company</h4>
          <ul>
            <NavLink to={"http://cephasgranites.com/"} className='footnav'><li>Cephas Granites-Moodabidri<span>(Slabs & Tails)</span></li></NavLink>
            <NavLink to={"https://www.stemsnleaves.com/"} className='footnav'><li>Stems N Leaves International <span>(Monuments)</span></li></NavLink>
            <NavLink to={"http://7cbmstone.com/"} className='footnav'><li>7 CBM Stones<span>(Blocks)</span></li></NavLink>
            
          </ul>
        </div>
        <div className="whatsapp">
    <NavLink className='whatsapp_link' to="http://wasap.my/+919480696046"><img src={whatsapp} alt="" srcSet=""/></NavLink>
</div>
      </div>
  
    </footer>
  );
}

export default Footer;
