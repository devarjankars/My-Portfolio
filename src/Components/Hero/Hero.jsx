import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
       <img src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"alt="profile-img"  />
       <h1><span>I'm  Sanjay Devarjankar</span>, Software developer based in India</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Ipsum, eos excepturi! Cumque dolor modi quis, reiciendis sunt incidunt veritatis temporibus inventore quae amet.
        </p>
        <div className='btn-container'>
        <div className='connect-me'>Connect With ME</div>
        <div className='resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero
