import { createSlice } from "@reduxjs/toolkit";

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    color6: '#FFFFFF',
    photo: 'https://media.giphy.com/media/dWK0YvLkPTdzq/giphy.gif'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    color6: '#000000',
    photo: 'https://placekitten.com/200/300'
}

//light mode is initial state
const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers:{
        toggleDark:(state) => {
            return mode1
        },
        toggleLight:(state) => {
            return mode2
        }
    }
})

export const {toggleDark, toggleLight} = modeSlice.actions

export default modeSlice.reducer