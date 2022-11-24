import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  clan: '',
  sect: '',
  disciplines: {},
  generation: 0,
  attributes: {},
  skills: {},
  savedCharacters: []
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
      // state.disciplines = action.payload
      state.disciplines = {}
      action.payload.map(discipline => (
        state.disciplines[discipline] = 0
      ))
    },
    setDisciplineValue: (state, action) => {
      state.disciplines[action.payload.name] = action.payload.value
    },
    setGeneration: (state, action) => {
      state.generation = action.payload
    },
    setSkills: (state, action) => {
      state.skills[action.payload.name] = action.payload.value
    },
    setAttributes: (state, action) => {
      state.attributes[action.payload.name] = action.payload.value
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

export const { setFirstName, setLastName, setClan, setGeneration, setSkills, setAttributes, setDisciplines, setDisciplineValue, setSect, setSavedCharacters, setCurrentCharacter } = charSlice.actions

export default charSlice.reducer
