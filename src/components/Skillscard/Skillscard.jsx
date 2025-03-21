import React from 'react'
import './Skillscard.scss'
const Skillscard = ({title,icon,isActive,onClick}) => {
  return (
    <div className={`skills-card ${isActive?"active":""}`}
     onClick={()=>onClick()}>
        <div className='skill-icon'>
            <img src={`${process.env.PUBLIC_URL}/skillsicon.png`} alt={title} />
        </div>
        <span>{title}</span>
    </div>
  )
}

export default Skillscard