import { createSlice } from "@reduxjs/toolkit";
import drawRouter from "../routers/drawRouter";

const initialState = []
const dbPersonSlice = createSlice({
    name:"dbpersons",
    initialState,
    reducers:{
        newDBPersons(state, action){
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
        dispatch(newDBPersons(persons))
    }
}

export const removeDBPerson = (name, person,password) =>{


    console.log("RemveDBPerson");
    console.log(name);
    console.log(person);
    console.log(password);

    return async dispatch=>{
        const data = await drawRouter.deletePerson(name,person,password)
        dispatch(newDBPersons(data))
    }
}

export const initializeDBPersons = (hash) => {
    return async dispatch=>{
        const drew = await drawRouter.getTestData()
        dispatch(newDBPersons(drew))
    }
}
export const initializeDBPersonsWithHash = (hash) => {
    return async dispatch=>{
        const drew = await drawRouter.getDrewWithHash(hash)
        dispatch(newDBPersons(drew))
    }
}

export const pushPerson=(person)=>{
    return async dispatch=>{
        dispatch(addPerson(person))
    }
}

export const {newDBPersons, deletePerson,addPerson} = dbPersonSlice.actions

export default dbPersonSlice.reducer