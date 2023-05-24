import {configureStore} from '@reduxjs/toolkit'
import settingsReducer from '../feature/settingsSlice'
import chartReducer from '../feature/chartSlice'

const reducers = {
    settings: settingsReducer,
    chart: chartReducer
}

const store = configureStore({
    reducer: reducers
})

export default store