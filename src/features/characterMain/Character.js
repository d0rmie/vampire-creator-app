import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFirstName, selectLastName, selectClan, selectGeneration, selectSect, setSavedCharacters, selectSavedCharacters } from './charSlice'
import { disciplinesByClan } from '../../data/data'
import SavedCharacters from './SavedCharacters'
import Attributes from './Attributes'
import Skills from './Skills'
// import Clans from './Clans'
import Disciplines from './Disciplines'
import BasicInfo from './BasicInfo'
import { Link } from 'react-router-dom'

function Character () {
  const dispatch = useDispatch()
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  const clan = useSelector(selectClan)
  const generation = useSelector(selectGeneration)
  const charDisciplines = disciplinesByClan[clan]
  const sect = useSelector(selectSect)
  const savedCharacters = useSelector(selectSavedCharacters)

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
                <BasicInfo />
                <Attributes />
                <Skills />
                {charDisciplines && <Disciplines />}
            </div>
            <div>
                <button onClick={onClickSave}>Save this character!</button>
            </div>
            <Link to="/clans">Show the Clans!</Link>
            {savedCharacters && <SavedCharacters />}
        </div>
  )
}

export default Character
