import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    BarChartData: [],
    isLoading: false
}

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        updateData: (state, {payload}) => {
          state.BarChartData = payload
        }
    }
})

export const {updateData} = chartSlice.actions

export default chartSlice.reducer