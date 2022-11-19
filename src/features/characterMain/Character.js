import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFirstName, selectLastName, selectClan, selectGeneration, selectSkills, setFirstName, setLastName, setClan, setGeneration, setDisciplines } from './charSlice'
import { clanList, disciplinesByClan, socialSkills, mentalSkills } from '../../data/data'

function Character () {
  const dispatch = useDispatch()
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  const clan = useSelector(selectClan)
  const generation = useSelector(selectGeneration)
  const charDisciplines = disciplinesByClan[clan]
  const skills = useSelector(selectSkills)

  const changeFirst = (e) => {
    dispatch(setFirstName(e.target.value))
  }
  const changeLast = (e) => {
    dispatch(setLastName(e.target.value))
  }
  const clickClan = (e) => {
    dispatch(setClan(e.target.value))
    dispatch(setDisciplines(charDisciplines))
  }
  const changeGen = (e) => {
    dispatch(setGeneration(e.target.value))
  }
  return (
        <div>
            <h1>This is the character creator!</h1>
            <h3>{firstName}</h3>
            <h4>{lastName}</h4>
            <p>Clan: {clan}</p>
            <p>Generation: {generation}</p>
            {charDisciplines && <ul>
                {charDisciplines.map((discipline, index) => (
                    <li key={index}><div>{discipline}</div></li>
                ))}
            </ul>}
            <div>
                {skills}
            </div>
            <div>
                <label htmlFor='fname'>First Name:</label>
                <input type="text" id='fname' name='fname' onChange={changeFirst}></input>
                <br></br>
                <label htmlFor='lname'>Last Name:</label>
                <input type="text" id="lname" name="lname" onChange={changeLast}></input>
                <label htmlFor='gen'>Generation</label>
                <input type="number" id="gen" name="gen" onChange={changeGen}></input>
                <div className="skillHolder">

                    <h3>Mental Skills!</h3>
                    <ul>
                        {mentalSkills.map((skill, index) => (
                            <li key={index}>
                                <label htmlFor={skill}>{skill}</label>
                                <input type='number' name={skill} id={skill}></input>
                            </li>
                        ))}
                    </ul>
                    <h3>Social Skills!</h3>
                    <ul>
                        {socialSkills.map((skill, index) => (
                            <li key={index}>
                                <label htmlFor={skill}>{skill}</label>
                                <input type='number' name={skill} id={skill}></input>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <ul>
                {clanList.map((clan, index) => (
                    <li key={index}>
                        <div>
                            <h3>{clan.name}</h3>
                            <p>{clan.description}</p>
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
        </div>
  )
}

export default Character
