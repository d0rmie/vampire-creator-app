import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { socialSkills, mentalSkills, physicalSkills } from '../../data/data'
import { setSkills, selectSkillLevel, selectSkillLimit } from './charSlice'

function Skills () {
  const dispatch = useDispatch()
  const physSkillKeys = Object.keys(physicalSkills)
  const mentalSkillsKeys = Object.keys(mentalSkills)
  const socialSkillsKeys = Object.keys(socialSkills)
  const skillLevel = useSelector(selectSkillLevel)
  const skillLimit = useSelector(selectSkillLimit)

  const handleChangeSkill = (e) => {
    if (skillLimit === skillLevel) {
      alert('This is too many!')
      e.target.value = e.target.value - 1
    }
    dispatch(setSkills({ name: e.target.name, value: e.target.value }))
    // console.log(skills)
  }
  return (
<div className="skillHolder">
<div className="physHolder">
<h3>Physical Skills!</h3>
    <ul>
        {physSkillKeys.map((skill, index) => (
            <li key={index}>
                <label htmlFor={skill}>{skill}</label>
                <input type='number' name={skill} id={skill} onChange={handleChangeSkill} min='0' max='5'></input>
            </li>
        ))}
    </ul>
    </div>
    <div className="mentalHolder">
    <h3>Mental Skills!</h3>
    <ul>
        {mentalSkillsKeys.map((skill, index) => (
            <li key={index}>
                <label htmlFor={skill}>{skill}</label>
                <input type='number' name={skill} id={skill} onChange={handleChangeSkill} min="0" max="5"></input>
            </li>
        ))}
    </ul>
    </div>
    <div className="socialHolder">
    <h3>Social Skills!</h3>
    <ul>
        {socialSkillsKeys.map((skill, index) => (
            <li key={index}>
                <label htmlFor={skill}>{skill}</label>
                <input type='number' name={skill} id={skill} onChange={handleChangeSkill} max="5" min="0"></input>
            </li>
        ))}
    </ul>
    </div>
</div>)
}

export default Skills
