import React from 'react'
import { clanList, disciplinesByClan } from '../../data/data'
import { setClan, setDisciplines } from './charSlice'
import { useDispatch } from 'react-redux'

function Clans () {
  const dispatch = useDispatch()
  const clickClan = (e) => {
    dispatch(setClan(e.target.value))
    dispatch(setDisciplines(disciplinesByClan[e.target.value]))
  }
  return (<div>
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
    </div>)
}
export default Clans
