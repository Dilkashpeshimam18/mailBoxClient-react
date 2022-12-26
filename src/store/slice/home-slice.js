import { Home } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";


const initialHomeState = {
    isSeletedTab: 'Inbox'
}

const HomeSlice = createSlice({
    name: 'home',
    initialState: initialHomeState,
    reducers: {
        handleIsSelectedTab(state, action) {
            state.isSeletedTab = action.payload
        }
    }
})

export const { handleIsSelectedTab } = HomeSlice.actions
export default HomeSlice.reducer