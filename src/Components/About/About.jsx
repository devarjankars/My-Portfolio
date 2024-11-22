import React from 'react'
import themePattern from '../../assets/theme_pattern.svg'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="about-section">
            <div className="left-section">
                <img src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg" alt="profile-picture"  />

            </div>
            <div className="right-section">
                <div className="info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Amet, molestias atque vero libero nulla odit labore deserunt accusamus ab modi iste cum. 
                    Tempora repudiandae quidem nam similique eligendi fugit magnam! <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloremque magni obcaecati quo quidem id.
                </div>
                <div className="skills">
                  <div className="skill">
                    <h2>Java</h2>
                  <hr style={{width:"80%"}} />
                  </div>
                  <div className="skill">
                    <h2>Javascript</h2>
                  <hr style={{width:"70%"}} />
                  </div>
                  <div className="skill">
                    <h2>HTML & CSS</h2>
                  <hr style={{width:"60%"}} />
                  </div>
                  <div className="skill">
                    <h2>React</h2>
                    <hr style={{width:"60%"}} />
                    </div>
                  <div className="skill">
                    <h2>Node</h2>
                    <hr style={{width:"50%"}} />
                    </div>
                  <div className="skill">
                    <h2>Express</h2>
                    <hr style={{width:"80%"}} />
                    </div>
                  
                </div>

            </div>
        </div>
        <div className="about_achivements">
            <div className="about_achivement">
           <h1>1+</h1>
           <p>YEARS OF EXPERIENCE</p>
            </div>
           <>|</>
            <div className="about_achivement">
                <h1>35</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <>|</>
            <div className="about_achivement">
                <h1>2</h1>
                <p>HAPPY CLIENTS</p>
            </div>
           
        </div>
      
    </div>
  )
}

export default About
