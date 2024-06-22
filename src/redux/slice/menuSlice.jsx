import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuStatus:false
}

const menuSlice = createSlice({
    name:"menuSlice",
    initialState,
    reducers:{
        menuClick:(state)=>{
            state.menuStatus=!state.menuStatus
        }
    }
});


export const {menuClick} = menuSlice.actions;
export default menuSlice.reducer;

