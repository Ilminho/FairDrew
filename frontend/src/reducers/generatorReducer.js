import { createSlice } from "@reduxjs/toolkit";

const initialState = 0
const generatorSlice = createSlice({
    name:"generator",
    initialState,
    reducers:{
        setSetting(state, action){
            return action.payload
        }
    }
})

export const changeSetting = (setting)=>{
    return async dispatch=>{
        if(setting===0||setting===1||setting===2){
            dispatch(setSetting(setting))
        }
    }
}

export const {setSetting} = generatorSlice.actions

export default generatorSlice.reducer