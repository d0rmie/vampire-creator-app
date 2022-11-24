import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDisciplines, setDisciplineValue } from './charSlice'

function Disciplines () {
  const dispatch = useDispatch()
  const disciplines = useSelector(selectDisciplines)
  const disciplineKeys = Object.keys(disciplines)
  const handleDisciplineChange = (e) => {
    dispatch(setDisciplineValue({ name: e.target.name, value: e.target.value }))
  }
  return (
<div>
                    {/* fill in with disciplines when possible */}
                    <h3>Disciplines</h3>
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
