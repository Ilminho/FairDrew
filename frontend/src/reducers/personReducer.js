import { createSlice } from "@reduxjs/toolkit";
import drawRouter from "../routers/drawRouter";

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

export const initializePersons = (hash) => {
    return async dispatch=>{
        const drew = await drawRouter.getTestData()
        console.log("Data");
        console.log(drew);
        dispatch(newPersons(drew[0]))
    }
}

export const pushPerson=(person)=>{
    return async dispatch=>{
        dispatch(addPerson(person))
    }
}

export const {newPersons, deletePerson,addPerson} = personSlice.actions

export default personSlice.reducer