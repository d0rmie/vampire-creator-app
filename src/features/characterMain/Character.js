import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectFirstName,selectLastName,selectClan,selectDisciplines, selectGeneration, selectSkills, selectAttributes, setFirstName,setLastName, setClan, setGeneration, setSkills, setAttributes, setDisciplines} from './charSlice';
import {clanList, disciplinesByClan, socialSkills, physicalSkills, mentalSkills} from '../../data/data';

function Character() {
    const dispatch = useDispatch();
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const clan = useSelector(selectClan);
    const disciplines = useSelector(selectDisciplines);
    const generation = useSelector(selectGeneration);
    const charDisciplines = disciplinesByClan[clan];


    const changeFirst = (e) => {
        console.log(charDisciplines);
        dispatch(setFirstName(e.target.value));
    }
    const changeLast = (e) => {
        dispatch(setLastName(e.target.value));
    }
    const clickClan = (e) => {
        dispatch(setClan(e.target.value));
    }
    return(
        <div>
            <h1>This is the character creator!</h1>
            <h3>{firstName}</h3>
            <h4>{lastName}</h4>
            <p>Clan: {clan}</p>
            <h3>Disciplines:</h3>
            <ul>
                {charDisciplines.map(discipline=>(
                    <li>{discipline}</li>
                ))}
            </ul>
           <form>
            <label for='fname'>First Name:</label>
            <input type="text" id='fname' name='fname' onChange={changeFirst}></input>
            <br></br>
            <label for='lname'>Last Name:</label>
            <input type="text" id="lname" name="lname" onChange={changeLast}></input>
            <div className="skillHolder">
            <h3>Physical Skills!</h3>
            <ul>
            {physicalSkills.map((skill,index)=>(
                <li key={index}>
                <label for={skill}>{skill}</label>
                <input type='number' name={skill} id={skill}></input>
                </li>
            ))}
            </ul>
            </div>
           </form>
           <ul>
           {clanList.map((clan,index)=>(
            <li key={index}>
                <div>
                    <h3>{clan.name}</h3>
                    <p>{clan.description}</p>
                    <ul>
                        {disciplinesByClan[clan.name].map((discipline,index)=>(
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

export default Character;