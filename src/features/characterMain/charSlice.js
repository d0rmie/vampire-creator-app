import { createSlice } from '@reduxjs/toolkit'
// import { physicalSkills } from '../../data/data'

const initialState = {
  firstName: '',
  clan: '',
  disciplines: {},
  generation: 0,
  attributes: [],
  skills: {}
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
      state.attributes = []
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

export const { setFirstName, setLastName, setClan, setGeneration, setSkills, setAttributes, setDisciplines, setDisciplineValue } = charSlice.actions

export default charSlice.reducer
