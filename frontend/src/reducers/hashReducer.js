import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const hashSlice = createSlice({
    name:"hash",
    initialState,
    reducers:{
        setHash(state, action){
            return action.payload
        }
    }
})

export const hashSetter = (hash)=>{
    return async dispatch=> {
        dispatch(setHash(hash))
    }
}

export const {setHash} = hashSlice.actions

export default hashSlice.reducer