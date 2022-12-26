import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/auth-slice'
import emailReducer from './slice/email-slice'
import homeReducer from './slice/home-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        email: emailReducer,
        home: homeReducer
    }
})

export default store