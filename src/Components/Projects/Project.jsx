import React from 'react'
import './project.css'
import themePattern from '../../assets/theme_pattern.svg'
import ServiceData from '../../assets/mywork_data'
import Arrow from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div className="project">
        <div className="project-title">
            <h1>My Work</h1>
            <img src={themePattern} alt="theme-pattern"  />
        </div>
        <div className="project-cards">
          {
            ServiceData.map((ele)=>{
                return(
                
                    <img src={ele.w_img} alt="project-name"  />
                

                
                    )
            })
              


          }
        </div>
        <div className="btn-more">
          <p>Show More</p>
          <img src={Arrow} alt="" />
        </div>


       

    </div>
    

    // My latest work
  )
}

export default Project
