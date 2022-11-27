import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAttributes, selectAttributes, selectAttributeLevel, selectAttributeLimit } from './charSlice'
import { physicalAttributes, mentalAttributes, socialAttributes } from '../../data/data'

function Attributes () {
  const dispatch = useDispatch()
  const physAttributeKeys = Object.keys(physicalAttributes)
  const mentalAttributeKeys = Object.keys(mentalAttributes)
  const socialAttributeKeys = Object.keys(socialAttributes)
  const attributeLevel = useSelector(selectAttributeLevel)
  const attributeLimit = useSelector(selectAttributeLimit)

  const attributes = useSelector(selectAttributes)
  const changeAttribute = (e) => {
    if (attributeLimit === attributeLevel) {
      alert('This is too many!')
      e.target.value = e.target.value - 1
    }
    dispatch(setAttributes({ name: e.target.name, value: e.target.value }))
    console.log(attributes)
  }
  return (
        <div className="AttrHolder">

                <div className="attributesList">
                    <h3>Physical Attributes</h3>
                    <ul>
                        {physAttributeKeys.map((attr, index) => (
                            <li key={index}><div>
                                <label htmlFor={attr}>{attr}</label>
                                <input type="number" name={attr} id={attr} min="0" max="5" onChange={changeAttribute}></input>
                                </div>
                                </li>
                        ))}
                    </ul>
                    </div>
                    <div className="attributesList">
                    <h3>Mental Attributes</h3>
                    <ul>
                        {mentalAttributeKeys.map((attr, index) => (
                            <li key={index}><div>
                                <label htmlFor={attr}>{attr}</label>
                                <input type="number" name={attr} id={attr} min="0" max="5" onChange={changeAttribute}></input>
                                </div>
                                </li>
                        ))}
                    </ul>
                    </div>
                    <div className="attributesList">
                    <h3>Social Attributes</h3>
                    <ul>
                        {socialAttributeKeys.map((attr, index) => (
                            <li key={index}><div>
                                <label htmlFor={attr}>{attr}</label>
                                <input type="number" name={`${attr}`} id={attr} min="0" max="5" onChange={changeAttribute}></input>
                                </div>
                                </li>
                        ))}
                    </ul>
                    </div>
                </div>
  )
}

export default Attributes
