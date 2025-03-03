import React from 'react'
import './Skillcardinfo.scss'

const Skillcardinfo = ({heading,skills}) => {
  return (
    <div className='skills-info-card'>
        <h6>{heading}</h6>

        <div className='skills-info-content'>
            {skills.map((item,index)=>(
                <React.Fragment key={`skill_${index}`}>
                <div className='skill-info'>
                    <p>{item.skill}</p>
                </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default Skillcardinfo