import React from 'react'
import './Contactus.css'
import themePattern from '../../assets/theme_pattern.svg'
import MailIcon from '../../assets/mail_icon.svg'
import CallIcon from '../../assets/call_icon.svg'
import Location from '../../assets/location_icon.svg'


const Contactus = () => {
  return (
    <div className='contact-us'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={themePattern} alt="theme-pattern"  />
        </div>
        <div className="container">
            <div className="left">
              <h1>Let's Talk</h1>
              <p>I'm currently avaliable to take on new projects, 
                so feel free to send me a message about anything that you want me to work on. 
                You can contact anytime.
            </p>
             <div className='email'>
                <img src={MailIcon} alt="email" />
                 <p>Devarjankars@gmail.com</p>
             </div>
             <div className='mbl'>
                <img src={CallIcon} alt="mobile" />
                 <p>91-9890426643</p>
             </div>
             <div className='location'>
                <img src={Location} alt="location" />
                 <p>Benglore, India</p>
             </div>
            </div>
            
                <from className="right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" placeholder='Enter your name' required />
                    <label htmlFor="emai">Your Email </label>
                    <input type="text" name="emai" placeholder='Enter your email' required />
                    <label htmlFor="msg">Write your message here</label>
                    <textarea name="msg" id="" rows={8} placeholder='Write your message here'></textarea>
                    <button type="submit" className='from-submit'>Submit</button>
                </from>
            

            
        </div>

    </div>
  )
}

export default Contactus
