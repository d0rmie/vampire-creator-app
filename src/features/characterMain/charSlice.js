import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    firstName:"",
    clan:"",
    disciplines:[],
    generation:0,
    attributes:[],
    skills:[]
}

export const charSlice = createSlice({
    name:'character',
    initialState,
    reducers:{
        setFirstName:(state,action)=> {
            state.firstName = action.payload;
        },
        setLastName:(state,action)=>{
            state.lastName = action.payload;
        },
        setClan: (state, action) => {
            state.clan = action.payload;
        },
        setDisciplines: (state, action) => {
            state.disciplines = action.payload;
        },
        setGeneration: (state, action) => {
            state.generation = action.payload;
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
        setAttributes: (state, action) => {
            state.attributes = action.payload;
        }
    }
});
export const selectFirstName = (state) => state.character.firstName;
export const selectLastName = (state) => state.character.lastName;

export const selectClan = (state) => state.character.clan;
export const selectDisciplines = (state) => state.character.disciplines;
export const selectGeneration = (state) => state.character.generation;
export  const selectSkills = (state) => state.character.skills;
export const selectAttributes = (state) => state.character.attributes;

export const {setFirstName, setLastName, setClan, setGeneration, setSkills, setAttributes, setDisciplines} = charSlice.actions;


export default charSlice.reducer; 