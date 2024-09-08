import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toogleAuth:false,
    hamburgerState:true,
    settingsSidebarState:false
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
        },
        settingsSidebarToggle: state=>{
            state.settingsSidebarState = !state.settingsSidebarState
        }
    }
})


export const {toogleAuthComponent, hamburgerStateToggle, settingsSidebarToggle} = booleanSlice.actions

export default booleanSlice.reducer