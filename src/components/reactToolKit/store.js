import { createSlice, configureStore } from '@reduxjs/toolkit';

let initialState = {
    counter:0,
    isLoggedIn: "FALSE"
}

let slice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter ++
         },
        decrement(state){ 
            state.counter--
        },
    }
})

let authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state){
            state.isLoggedIn = 'TRUE'
        },
        logout(state){
            state.isLoggedIn = 'FALSE'
        }
    }
    })

export const {increment, decrement} = slice.actions;

export const {login, logout} = authSlice.actions;

let store = configureStore({
    reducer: {
        counter: slice.reducer,
        auth: authSlice.reducer
    }
})

export default store