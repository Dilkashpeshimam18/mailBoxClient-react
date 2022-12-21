import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token') || null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        addToken(state, action) {
            state.token = action.payload
            state.isAuthenticated = true
        }
    }
})

export const authActions = AuthSlice.actions
export default AuthSlice.reducer