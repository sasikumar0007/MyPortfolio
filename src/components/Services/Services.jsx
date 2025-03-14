import Skillscard from '../Skillscard/Skillscard';
import './Services.scss'
import { useState } from "react"
import { SKILLS } from "../../utils/data"
import Skillcardinfo from '../Skillcardinfo/Skillcardinfo';
const Services = () => {
   
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);


    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    }
    return (

        <section className='skills-container'>
            <h5>Skills</h5>

            <div className='skills-content'>
                <div className='skills'>
                    {SKILLS.map((item) => (
                        <Skillscard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </div>
                <div className='skills-info'>
                    <Skillcardinfo
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>

        </section>

    )
}

export default Services