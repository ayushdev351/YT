import {configureStore} from '@reduxjs/toolkit'

import  pageReducer from './pageSlice.js'

const appStore = configureStore({
    reducer : {
        page : pageReducer
    }
})

export default appStore;


