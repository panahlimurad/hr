import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toogleAuth:false,
}

const booleanSlice = createSlice({
    name:"boolean",
    initialState,
    reducers:{
        toogleAuthComponent: state=>{
            state.toogleAuth = !state.toogleAuth
        },
    }
})


export const {toogleAuthComponent} = booleanSlice.actions

export default booleanSlice.reducer