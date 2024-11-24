import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer-top">
            <div className="top-left">
                 <img src="https://logos.textgiraffe.com/logos/logo-name/Sanjay-designstyle-smoothie-m.png" alt="footer-name" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Recusandae, nisi consequuntur consequatur vero ut repudiandae hic aspernatur mollitia,
                      reiciendis saepe ducimus nemo! 
                   </p>
            </div>
            <div className="top-right">
                 <input type="text" name="connect"  placeholder='Enter your Email'/>
                 <button type="submit">Subscibe</button>
            </div>
        </div>  
        <hr />   
         <div className="footer-bottom">
            <div className="bottom-left">
              <p> ©  2024 Sanjay. All rights reserved.</p>
            </div>
            <div className="bottom-right">
              <p>Term of Services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
        </div> 
    </div>
  )
}

export default Footer
