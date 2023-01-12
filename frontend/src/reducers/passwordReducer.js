import { createSlice } from "@reduxjs/toolkit";
import drawRouter from "../routers/drawRouter";

const initialState = []
const passwordSlice = createSlice({
    name:"password",
    initialState,
    reducers:{
        newPassword(state, action){
            return action.payload
        }
    }
})

export const setPasswordPersons = (persons)=>{
    return async dispatch=>{
        console.log(persons);
        dispatch(newPersons(persons))
    }
}


export const { newPassword} = passwordSlice.actions

export default personSlice.reducer