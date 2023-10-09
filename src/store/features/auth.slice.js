import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: "",
        email: "",
    },
    reducers:{
        insertAuth:(state ,action) => {
            console.log(action.payload)
            state.name = action.payload.email
            state.email = action.payload.password
        },
    },
})


export const { insertAuth } = authSlice.actions;


export default authSlice.reducer
