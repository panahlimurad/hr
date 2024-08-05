import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openList:false,
}

const booleanSlice = createSlice({
    name:"boolean",
    initialState,
    reducers:{
        openSidebarList: state=>{
            state.openList = !state.openList
        },
    }
})


export const {openSidebarList} = booleanSlice.actions

export default booleanSlice.reducer