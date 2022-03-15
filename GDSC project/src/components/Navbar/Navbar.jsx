import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navlinkStyles=({isActive})=>{
        return{
            borderBottom:isActive?'2px solid white':'none'
        }
    }
  return (
    <div>
        <div class="mainbody">
  <nav>

    <div class="Brand-Name">GDSC PROJECT</div>
    <div>
      <ul>
        <li><NavLink class="btn" to="/home" style={navlinkStyles} >Home</NavLink></li>
        <li><NavLink to="/checkup" class="btn" style={navlinkStyles} >Check UP</NavLink></li>
        <li><NavLink to="/contact" class="btn" style={navlinkStyles} >Contact Us</NavLink></li>
      </ul>
    </div>
    <div class="container3">
      <button class="Login">Login/Register</button>
    </div>


  </nav>
</div>
    </div>
  )
}

export default Navbar