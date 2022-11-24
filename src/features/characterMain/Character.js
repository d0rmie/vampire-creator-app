import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFirstName, selectLastName, selectClan, selectGeneration, selectSkills, selectDisciplines, setFirstName, setLastName, setClan, setGeneration, setDisciplines, setDisciplineValue, setSkills, setAttributes, selectAttributes, setSect, selectSect, setSavedCharacters, selectSavedCharacters } from './charSlice'
import { clanList, disciplinesByClan, socialSkills, mentalSkills, physicalSkills, physicalAttributes, mentalAttributes, socialAttributes } from '../../data/data'
import SavedCharacters from './SavedCharacters'

function Character () {
  const dispatch = useDispatch()
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  const clan = useSelector(selectClan)
  const generation = useSelector(selectGeneration)
  const charDisciplines = disciplinesByClan[clan]
  const skills = useSelector(selectSkills)
  const disciplineObject = useSelector(selectDisciplines)
  const sect = useSelector(selectSect)
  const savedCharacters = useSelector(selectSavedCharacters)

  const physSkillKeys = Object.keys(physicalSkills)
  const mentalSkillsKeys = Object.keys(mentalSkills)
  const socialSkillsKeys = Object.keys(socialSkills)

  const physAttributeKeys = Object.keys(physicalAttributes)
  const mentalAttributeKeys = Object.keys(mentalAttributes)
  const socialAttributeKeys = Object.keys(socialAttributes)

  const attributes = useSelector(selectAttributes)

  const changeFirst = (e) => {
    dispatch(setFirstName(e.target.value))
  }
  const changeLast = (e) => {
    dispatch(setLastName(e.target.value))
  }
  const clickClan = (e) => {
    dispatch(setClan(e.target.value))
    dispatch(setDisciplines(charDisciplines))
    console.log(disciplineObject)
  }
  const changeGen = (e) => {
    dispatch(setGeneration(e.target.value))
  }
  const handleChangeSkill = (e) => {
    dispatch(setSkills({ name: e.target.name, value: e.target.value }))
    console.log(skills)
  }
  const handleDisciplineChange = (e) => {
    dispatch(setDisciplineValue({ name: e.target.name, value: e.target.value }))
    console.log(disciplineObject)
  }
  const changeAttribute = (e) => {
    dispatch(setAttributes({ name: e.target.name, value: e.target.value }))
    console.log(attributes)
  }
  const changeSect = (e) => {
    dispatch(setSect(e.target.value))
    console.log(savedCharacters)
  }
  const onClickSave = () => {
    dispatch(setSavedCharacters())
  }
  return (
        <div>
            <h1>This is the character creator!</h1>
            <h3>{firstName}</h3>
            <h4>{lastName}</h4>
            <p>Clan: {clan}</p>
            <p>Generation: {generation}</p>
            <p>Sect Affiliation: {sect}</p>
            {charDisciplines && <ul>
                {charDisciplines.map((discipline, index) => (
                    <li key={index}><div>{discipline}</div></li>
                ))}
            </ul>}
            <div>

            </div>
            <div>
                <label htmlFor='fname'>First Name:</label>
                <input type="text" id='fname' name='fname' onChange={changeFirst}></input>
                <br></br>
                <label htmlFor='lname'>Last Name:</label>
                <input type="text" id="lname" name="lname" onChange={changeLast}></input>
                <label htmlFor='sect'>Sect Affiliation</label>
                <input type="text" id="sect" name="sect" onChange={changeSect}></input>
                <label htmlFor='gen'>Generation</label>
                <input type="number" id="gen" name="gen" onChange={changeGen}></input>
                <div className="AttrHolder">
                    <ul>
                        {physAttributeKeys.map((attr, index) => (
                            <li key={index}><div className="attributesList" >
                                <label htmlFor={attr}>{attr}</label>
                                <input type="number" name={attr} id={attr} min="0" max="5" onChange={changeAttribute}></input>
                                </div>
                                </li>
                        ))}
                    </ul>
                    <ul>
                        {mentalAttributeKeys.map((attr, index) => (
                            <li key={index}><div className="attributesList" >
                                <label htmlFor={attr}>{attr}</label>
                                <input type="number" name={attr} id={attr} min="0" max="5" onChange={changeAttribute}></input>
                                </div>
                                </li>
                        ))}
                    </ul>
                    <ul>
                        {socialAttributeKeys.map((attr, index) => (
                            <li key={index}><div className="attributesList" >
                                <label htmlFor={attr}>{attr}</label>
                                <input type="number" name={`${attr}`} id={attr} min="0" max="5" onChange={changeAttribute}></input>
                                </div>
                                </li>
                        ))}
                    </ul>
                </div>
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
                </div>
                {charDisciplines && <div>
                    {/* fill in with disciplines when possible */}
                    <ul>
                        {charDisciplines.map((discipline, index) => (
                            <li key={index}>
                                <label htmlFor={`${discipline}`}>{discipline}</label>
                                <input type="number" name={`${discipline}`} id={`${discipline}`} max="5" min="0" onChange={handleDisciplineChange}></input>
                            </li>
                        ))}
                    </ul>
                    </div>}
            </div>
            <div>
                <button onClick={onClickSave}>Save this character!</button>
            </div>
            <ul className="clanList">
                {clanList.map((clan, index) => (
                    <li key={index}>
                        <div className="clanListItem">
                            <div>
                            <h3>{clan.name}</h3>
                            <p>{clan.description}</p>
                            <div className="clanImgContainer"><img src={clan.img}></img></div>
                            </div>
                            <ul>
                                {disciplinesByClan[clan.name].map((discipline, index) => (
                                    <li key={index}>{discipline}</li>
                                ))}
                            </ul>
                            <button value={clan.name} onClick={clickClan}>Select this clan!</button>
                        </div>
                    </li>
                ))}
            </ul>
            {savedCharacters && <SavedCharacters />}
        </div>
  )
}

export default Character
