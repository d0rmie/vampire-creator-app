import React from 'react'
import { useDispatch } from 'react-redux'
import { setClan, setFirstName, setLastName, setSect, setGeneration, setDisciplines } from './charSlice'
import { disciplinesByClan } from '../../data/data'

function BasicInfo () {
  const dispatch = useDispatch()
  const changeFirst = (e) => {
    dispatch(setFirstName(e.target.value))
  }
  const changeLast = (e) => {
    dispatch(setLastName(e.target.value))
  }
  const changeGen = (e) => {
    dispatch(setGeneration(e.target.value))
  }

  const changeSect = (e) => {
    dispatch(setSect(e.target.value))
  }
  const changeClanText = (e) => {
    if (disciplinesByClan[e.target.value]) {
      dispatch(setClan(e.target.value))
      dispatch(setDisciplines(disciplinesByClan[e.target.value]))
    }
  }
  return (<div>
        <label htmlFor='fname'>First Name:</label>
                <input type="text" id='fname' name='fname' onChange={changeFirst}></input>
                <br></br>
                <label htmlFor='lname'>Last Name:</label>
                <input type="text" id="lname" name="lname" onChange={changeLast}></input>
                <label htmlFor='clanInput'>Clan</label>
                <input type="text" id="clanInput" name="clanInput" onChange={changeClanText}></input>
                <label htmlFor='sect'>Sect Affiliation</label>
                <input type="text" id="sect" name="sect" onChange={changeSect}></input>
                <label htmlFor='gen'>Generation</label>
                <input type="number" id="gen" name="gen" onChange={changeGen}></input>
    </div>)
}
export default BasicInfo
