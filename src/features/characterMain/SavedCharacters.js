import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSavedCharacters, setCurrentCharacter } from './charSlice'

function SavedCharacters () {
  const savedCharacters = useSelector(selectSavedCharacters)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    dispatch(setCurrentCharacter(e.target.value))
  }
  return (
    <ul>
        {savedCharacters.map((character, index) => (
            <li key={index}>
            <div>
            <h2>{character.firstName}</h2>
            <h3>{character.lastName}</h3>
            <p>{character.sect}</p>
            <p>{character.generation}</p>
            <p>{character.clan}</p>
            <h4>Disciplines</h4>
            <ul>
            {Object.keys(character.disciplines).map((discipline, index) => (
               <li key={index}>
               <p>{discipline}:{character.disciplines[discipline]}</p>
               </li>
            ))}
            </ul>
            <h4>Skills</h4>
            <ul>
            {Object.keys(character.skills).map((skill, index) => (
                <li key={index}>
                    <p>{skill} : {character.skills[skill]}</p>
                </li>
            ))}
            </ul>
            <h4>Attributes</h4>
            <ul>
            {Object.keys(character.attributes).map((attribute, index) => (
                <li key={index}>
                    <p>{attribute} : {character.attributes[attribute]}</p>
                </li>
            ))}
            </ul>
            <button onClick={handleClick} value={character}>Select this character!</button>
            </div>
            </li>
        ))}
    </ul>
  )
}

export default SavedCharacters
