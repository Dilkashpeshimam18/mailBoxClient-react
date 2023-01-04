import { createSlice } from "@reduxjs/toolkit";


const initialEmailState = {
    sendToEmail: localStorage.getItem('sendToEmail') || '',
    userMail: [],
    isRead: false,
    isLoading: false

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
        addAllUnreadMail(state, action) {
            state.userMail = action.payload
        },
        openRead(state) {
            state.isRead = true
        },
        closeRead(state) {
            state.isRead = false
        },
        reverseMail(state, action) {
            state.userMail = state.userMail.reverse()
        },
        updateUserMail(state, action) {
            state.userMail = action.payload
        },
        handleLoading(state, action) {
            state.isLoading = action.payload
        }

    }
})

export const emailActions = EmailSlice.actions
export default EmailSlice.reducer