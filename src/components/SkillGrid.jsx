import React from 'react';
import '../css/index.css';

const skills = [
    "JS", "HTML", "CSS","React","Node.js","Java","Python","C++","Git",
];

const SkillGrid = () => {
    return(
        <div className="skill-content">
             {skills.map((skill,index) => (
                <div key={index} className='skill-box'>{skill}</div>
             ))}
             
        </div>
    )
}
export default SkillGrid;