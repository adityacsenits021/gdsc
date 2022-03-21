import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {auth} from '../../database';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props) => {
  const navigate=useNavigate();
    const navlinkStyles=({isActive})=>{
        return{
            borderBottom:isActive?'2px solid white':'none',
            color:isActive?'#FFC000':'white'
        }
    }
  return (
    <div>
        <div class="mainbody">
  {/* <nav>

    <div class="Brand-Name"></div>
    <div>
      <ul>
        <li><NavLink class="btn" to="/" style={navlinkStyles} >Home</NavLink></li>
        <li><NavLink to="/checkup" class="btn" style={navlinkStyles} >Check UP</NavLink></li>
        <li><NavLink to="/contact" class="btn" style={navlinkStyles} >Contact Us</NavLink></li>
      </ul>
    </div>
    <div class="container3">
    {
          !props.user?
          
            <button className='btn'
            onClick={()=>{
              navigate('/login',{replace:true})
            }}
            >Login
          </button>
        :
          <button className='btn'
          onClick={()=>{
            signOut(auth)
            .then(()=>{
              console.log("You are logged out");
            })
            .catch((err)=>{
              console.log(err.message);
            })
          }}
          >Logout
          </button>
        }
    </div>


  </nav> */}
  <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        {/* <i class="fas fa-bars"></i> */}
        <MenuIcon/>
      </label>
      <label class="logo">HealPager</label>
      <ul>
      <li><NavLink class="btn" to="/" style={navlinkStyles} >Home</NavLink></li>
        <li><NavLink to="/checkup" class="btn" style={navlinkStyles} >Check UP</NavLink></li>
        <li><NavLink to="/chat" class="btn" style={navlinkStyles} >Chat with Us</NavLink></li>
        
      <div class="container3">
    {
          !props.user?
          
            <button className='btn'
            onClick={()=>{
              navigate('/login',{replace:true})
            }}
            >Login
          </button>
        :
          <button className='btn'
          onClick={()=>{
            signOut(auth)
            .then(()=>{
              console.log("You are logged out");
            })
            .catch((err)=>{
              console.log(err.message);
            })
          }}
          >Logout
          </button>
        }
    </div>
    </ul>
    </nav>
</div>
    </div>
  )
}

export default Navbar