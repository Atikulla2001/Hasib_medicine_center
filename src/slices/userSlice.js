import { createSlice } from '@reduxjs/toolkit'
import { getAuth } from 'firebase/auth'





const auth = getAuth

console.log(auth)



const initialState = {
    value: auth.currentUser,
}

// const initialState = {
//     value: localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login"))
//         : "",
// }

export const userSlice = createSlice({
    name: 'user',
    initialState,


    // login korara pore data jar kache pathabo take reducers bole // 
    // state er kaj holo initialstate er value ke dhora //

    reducers: {
        userLoginInfo: (state, actions) => {
            state.value = actions.payload;
            // console.log(actions.payload)
        },

    },
})


export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer