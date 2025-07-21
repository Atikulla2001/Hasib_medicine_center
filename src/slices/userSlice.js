import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login"))
        : 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,


    // login korara pore data jar kache pathabo take reducers bole // 
    // state er kaj holo initialstate er value ke dhora //

    reducers: {
        userLoginInfo: (state, actions) => {
            state.value = actions.payload;
            console.log(actions.payload)
        },

    },
})


export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer