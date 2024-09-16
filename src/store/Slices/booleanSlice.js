import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toogleAuth:false,
    hamburgerState:true,
    settingsSidebarState:false,
    sideBarColor:localStorage.getItem("sideBarColor") ? localStorage.getItem("sideBarColor") : "light",
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
        },
        setSideBarColor: (state)=>{
            state.sideBarColor = state.sideBarColor
        }
    }
})


export const {toogleAuthComponent, hamburgerStateToggle, settingsSidebarToggle,setSideBarColor} = booleanSlice.actions

export default booleanSlice.reducer