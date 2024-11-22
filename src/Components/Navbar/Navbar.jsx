import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import About from '../About/About'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="https://logos.textgiraffe.com/logos/logo-name/Sanjay-designstyle-smoothie-m.png" alt="lName-img" />
        <ul className='nav-link'>
            <li><a href="#">Home</a></li>
            <li><a href={"#"}>About ME</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-connect">
            Connect With ME
        </div>
      
    </div>
  )
}

export default Navbar
