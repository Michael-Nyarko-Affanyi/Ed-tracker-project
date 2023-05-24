import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        open: (state) => {
          state.isOpen = true
        },
        close: (state) => {
          state.isOpen = false
        }
    }
})

export const {open, close} = settingsSlice.actions

export default settingsSlice.reducer