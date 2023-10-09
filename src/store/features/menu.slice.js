import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "auth",
    initialState: [
        {
            name:"Home" ,
            router:"/home"
        },
        {
            name:"Categorias" ,
            router:"/category"
        },
        {
            name:"Finanças" ,
            router:"/finances"
        },
        {
            name:"Usuários" ,
            router:"/users"
        },
        {
            name:"Sair" ,
            router:"/logout"
        }],
    reducers:{},
})



export default menuSlice.reducer
