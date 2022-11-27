import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDisciplines, setDisciplineValue, selectDisciplineLimit, selectDisciplineLevel } from './charSlice'

function Disciplines () {
  const dispatch = useDispatch()
  const disciplines = useSelector(selectDisciplines)
  const disciplineKeys = Object.keys(disciplines)
  const disciplineLimit = useSelector(selectDisciplineLimit)
  const disciplineLevel = useSelector(selectDisciplineLevel)
  const handleDisciplineChange = (e) => {
    if (Number(disciplineLimit) === Number(disciplineLevel)) {
      alert('This is too many!')
      e.target.value = e.target.value - 1
    }
    dispatch(setDisciplineValue({ name: e.target.name, value: e.target.value }))
  }
  return (
<div>
                    {/* fill in with disciplines when possible */}
                    <h3>Disciplines</h3>
                    <p>Discipline Dots Available: {disciplineLimit}</p>
                    <p>Dots Used: {disciplineLevel}</p>
                    <ul className="disciplineList">
                        {disciplineKeys.map((discipline, index) => (
                            <li key={index}>
                                <label htmlFor={`${discipline}`}>{discipline}</label>
                                <input type="number" name={`${discipline}`} id={`${discipline}`} max="5" min="0" onChange={handleDisciplineChange}></input>
                            </li>
                        ))}
                    </ul>
                    </div>)
}
export default Disciplines
