import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import toDoReducer from './toDoSlice'

const rootReducer = combineReducers({
    toDo: toDoReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
