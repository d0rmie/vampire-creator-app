import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  clan: '',
  sect: '',
  disciplines: {},
  generation: 0,
  attributes: {},
  skills: {},
  savedCharacters: [],
  disciplineLimit: 4,
  skillLimit: 19,
  attributeLimit: 22,
  currentDisciplineLevel: 0,
  currentSkillLevel: 0,
  currentAttributeLevel: 0
}

export const charSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setClan: (state, action) => {
      state.clan = action.payload
      state.skills = {}
      state.attributes = {}
    },
    setSect: (state, action) => {
      state.sect = action.payload
    },
    setDisciplines: (state, action) => {
      state.disciplines = {}
      action.payload.map(discipline => (
        state.disciplines[discipline] = 0
      ))
    },
    setDisciplineValue: (state, action) => {
      // const disciplineLimit = 4
      const totalDisciplineArr = Object.values(state.disciplines)
      const initialValue = 0
      state.currentDisciplineLevel = totalDisciplineArr.reduce((acc, currentValue) => Number(acc) + Number(currentValue), initialValue)
      if (state.disciplineLimit > state.currentDisciplineLevel || state.disciplines[action.payload.name] > action.payload.value) {
        state.disciplines[action.payload.name] = action.payload.value
      }
    },
    setGeneration: (state, action) => {
      state.generation = action.payload
    },
    setSkills: (state, action) => {
      // const skillLimit = 19
      const totalSkillsArr = Object.values(state.skills)
      const initialValue = 0
      state.currentSkillLevel = totalSkillsArr.reduce((acc, currentValue) => Number(acc) + Number(currentValue), initialValue)
      if (state.skillLimit > state.currentSkillLevel || state.skills[action.payload.name] > action.payload.value) {
        state.skills[action.payload.name] = action.payload.value
      }
    },
    setAttributes: (state, action) => {
      // const attributeLimit = 22
      const totalAttsArr = Object.values(state.attributes)
      const initialValue = 0
      state.currentAttributeLevel = totalAttsArr.reduce((acc, currentValue) => Number(acc) + Number(currentValue), initialValue)
      if (state.attributeLimit > state.currentAttributeLevel || state.attributes[action.payload.name] > action.payload.value) {
        state.attributes[action.payload.name] = action.payload.value
      }
    },
    setSavedCharacters: (state) => {
      state.savedCharacters.push({
        firstName: state.firstName,
        lastName: state.lastName,
        clan: state.clan,
        sect: state.sect,
        generation: state.generation,
        disciplines: state.disciplines,
        attributes: state.attributes,
        skills: state.skills
      })
    },
    setCurrentCharacter: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.clan = action.payload.clan
      state.sect = action.payload.sect
      state.generation = action.payload.generation
      state.disciplines = action.payload.disciplines
      state.attributes = action.payload.attributes
      state.skills = action.payload.skills
    }
  }
})
export const selectFirstName = (state) => state.character.firstName
export const selectLastName = (state) => state.character.lastName

export const selectClan = (state) => state.character.clan
export const selectDisciplines = (state) => state.character.disciplines
export const selectGeneration = (state) => state.character.generation
export const selectSkills = (state) => state.character.skills
export const selectAttributes = (state) => state.character.attributes
export const selectSect = (state) => state.character.sect
export const selectSavedCharacters = (state) => state.character.savedCharacters
export const selectDisciplineLimit = (state) => state.character.disciplineLimit
export const selectDisciplineLevel = (state) => state.character.currentDisciplineLevel
export const selectSkillLimit = (state) => state.character.skillLimit
export const selectSkillLevel = (state) => state.character.currentSkillLevel
export const selectAttributeLimit = (state) => state.character.attributeLimit
export const selectAttributeLevel = (state) => state.character.currentAttributeLevel

export const { setFirstName, setLastName, setClan, setGeneration, setSkills, setAttributes, setDisciplines, setDisciplineValue, setSect, setSavedCharacters, setCurrentCharacter } = charSlice.actions

export default charSlice.reducer
