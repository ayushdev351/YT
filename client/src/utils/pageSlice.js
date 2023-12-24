import {createSlice} from '@reduxjs/toolkit'

const pageSlice = createSlice({
    name : 'page',
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})

export const {toggleMenu} = pageSlice.actions;
export default pageSlice.reducer;

// Ref line 10 : 
// Previously -> 
// Son't mutate state in reducer
// Current (RTK) -> 
// Have to mutate state in reducer
    // It makes new copy og state
    // Update it
    // Returns the new state
// Behind the scene everything is done same as was earlier using immer.js