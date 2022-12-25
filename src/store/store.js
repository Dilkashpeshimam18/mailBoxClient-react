import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/auth-slice'
import emailReducer from './slice/email-slice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        email: emailReducer
    }
})

export default store