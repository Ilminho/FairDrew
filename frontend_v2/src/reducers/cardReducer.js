import { createSlice } from "@reduxjs/toolkit";


const initialState = {card:1}
const drewCardSlice = createSlice({
    name:"drewcard",
    initialState,
    reducers:{
        setCard(state, action){
            return action.payload
        }
    }
})

export const numberSetter = (card)=>{
    return async dispatch=>{
        typeof card ==="number"?dispatch(setCard({card:card})):console.log("not a number");        
    }
}



export const {setCard} = drewCardSlice.actions

export default drewCardSlice.reducer