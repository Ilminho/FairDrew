import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const personSlice = createSlice({
    name:"persons",
    initialState,
    reducers:{
        newPersons(state, action){
            return action.payload
        },
        deletePerson(state,action){
            return state.filter(e=>e.id!==action.payload)
        },
        addPerson(state,action){
            state.push(action.payload)
        },
        testPerson(state,action){
            state=["ilkka"]
        }
    }
})

export const setPersons = (persons)=>{
    return async dispatch=>{
        console.log(persons);
        dispatch(newPersons(persons))
    }
}

export const removePerson = (person) =>{
    return async dispatch=>{
        console.log(person);
        dispatch(deletePerson(person))
    }
}

export const initializePersons = (persons) => {
    return async dispatch=>{
        dispatch()
    }
}

export const pushPerson=(person)=>{
    return async dispatch=>{
        dispatch(addPerson(person))
    }
}

export const {newPersons, deletePerson,addPerson} = personSlice.actions

export default personSlice.reducer