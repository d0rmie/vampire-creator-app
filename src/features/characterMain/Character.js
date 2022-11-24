import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFirstName, selectLastName, selectClan, selectGeneration, selectDisciplines, setFirstName, setLastName, setClan, setGeneration, setDisciplines, setDisciplineValue, setSect, selectSect, setSavedCharacters, selectSavedCharacters } from './charSlice'
import { clanList, disciplinesByClan } from '../../data/data'
import SavedCharacters from './SavedCharacters'
import Attributes from './Attributes'
import Skills from './Skills'

function Character () {
  const dispatch = useDispatch()
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  const clan = useSelector(selectClan)
  const generation = useSelector(selectGeneration)
  const charDisciplines = disciplinesByClan[clan]
  const disciplineObject = useSelector(selectDisciplines)
  const sect = useSelector(selectSect)
  const savedCharacters = useSelector(selectSavedCharacters)

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

  const handleDisciplineChange = (e) => {
    dispatch(setDisciplineValue({ name: e.target.name, value: e.target.value }))
    console.log(disciplineObject)
  }

  const changeSect = (e) => {
    dispatch(setSect(e.target.value))
    console.log(savedCharacters)
  }
  const onClickSave = () => {
    dispatch(setSavedCharacters())
  }
  return (
        <div className="App">
            <div className="baseInfo">
            <h1>This is the character creator!</h1>
            <h3>{firstName}</h3>
            <h4>{lastName}</h4>
            <p>Clan: {clan}</p>
            <p>Generation: {generation}</p>
            <p>Sect Affiliation: {sect}</p>
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
                <Attributes />
                <Skills />
                {charDisciplines && <div>
                    {/* fill in with disciplines when possible */}
                    <h3>Disciplines</h3>
                    <ul className="disciplineList">
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
