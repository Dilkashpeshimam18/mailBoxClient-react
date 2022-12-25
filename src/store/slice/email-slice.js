import { createSlice } from "@reduxjs/toolkit";


const initialEmailState = {
    sendToEmail: localStorage.getItem('sendToEmail') || '',
    userMail: []
}


const EmailSlice = createSlice({
    name: 'email',
    initialState: initialEmailState,
    reducers: {
        addSendToEmail(state, action) {
            state.sendToEmail = action.payload
        },
        addUserMail(state, action) {
            state.userMail = action.payload
        }

    }
})

export const emailActions = EmailSlice.actions
export default EmailSlice.reducer