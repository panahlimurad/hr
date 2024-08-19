import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toogleAuth:false,
    hamburgerState:true
}

const booleanSlice = createSlice({
    name:"boolean",
    initialState,
    reducers:{
        toogleAuthComponent: state=>{
            state.toogleAuth = !state.toogleAuth
        },
        hamburgerStateToggle: state=>{
            state.hamburgerState = !state.hamburgerState
        }
    }
})


export const {toogleAuthComponent, hamburgerStateToggle} = booleanSlice.actions

export default booleanSlice.reducer