## RTK basic setup

Create Store -> using configureStore API from reduxjs/toolkit
Create Slice -> create useCase specific slice -> using createSlice API from reduxjs/toolkit
    add name
    add initialState
    add all actions (functions) in reducers
    export actions and reducer
Add slice reducer to store configuration
Wrap the store with App -> using Provider given by react-redux
    pass store to it
    Wrap provider only with components in which you want to use redux
Dispatch Actions -> using useDispatch hook from react-redux
    import actions from the specific slice
Subscribe to specific data -> using useSelector hook from react-redux
    subscribe only to a small portion / data of the slice