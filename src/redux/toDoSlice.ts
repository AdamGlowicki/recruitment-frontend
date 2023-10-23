import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ITask, IToDoState, IToggleTask} from "./interfaces";
import {getElementData} from "./helpers";

export const initialState: IToDoState = {
    toDoList: [],
    removedTask: {task: null, index: 0},
    filter: ''
}

export const counterSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.toDoList.push(action.payload)
        },
        editTask: (state, action: PayloadAction<ITask>) => {
            const {index} = getElementData(state.toDoList, action.payload.id)

            state.toDoList.splice(index, 1)
            state.toDoList.splice(index , 0, action.payload)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.removedTask.task = state.toDoList.find(item => item.id === action.payload) || null
            state.toDoList = state.toDoList.filter(item => item.id !== action.payload)
        },
        toggleTask: (state, action: PayloadAction<IToggleTask>) => {
            state.toDoList = state.toDoList.map(item => item.id === action.payload.id ? {...item, isCompleted: action.payload.isCompleted} : item)
        },
        removeRemovedTask: (state) => {
            state.removedTask.task = null
        },
        restoreTask: (state) => {
            const {task, index} = state.removedTask
            if (task) {
                state.toDoList.splice(index, 0, task)
            }
            state.removedTask.task = null
        },
        moveUp: (state, action: PayloadAction<string>) => {
            const {index, element} = getElementData(state.toDoList, action.payload)

            if (index === 0 || !element ) return

            state.toDoList.splice(index, 1)
            state.toDoList.splice(index - 1, 0, element)
        },
        moveDown: (state, action: PayloadAction<string>) => {
            const {index, element} = getElementData(state.toDoList, action.payload)

            if (index === state.toDoList.length - 1 || !element ) return

            state.toDoList.splice(index, 1)
            state.toDoList.splice(index + 1, 0, element)
        },
        filter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        }
    }
    ,
})

export const { addTask, editTask, toggleTask, removeTask, removeRemovedTask, restoreTask, moveDown, moveUp, filter } = counterSlice.actions

export const selectTasks = (state: RootState) => state.toDo.toDoList
export const removedTaskSelector = (state: RootState) => state.toDo.removedTask
export const filterSelector = (state: RootState) => state.toDo.filter

export default counterSlice.reducer
