import { createSlice } from "@reduxjs/toolkit";


const initialEmailState = {
    sendToEmail: localStorage.getItem('sendToEmail') || '',
    userMail: [],
    isRead: false

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
        },
        addAllSentMail(state, action) {
            state.userMail = action.payload
        },
        openRead(state) {
            state.isRead = true
        },
        closeRead(state) {
            state.isRead = false
        }

    }
})

export const emailActions = EmailSlice.actions
export default EmailSlice.reducer