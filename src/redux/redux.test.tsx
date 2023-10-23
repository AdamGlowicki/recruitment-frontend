import reducer, {addTask, initialState, removeTask} from './toDoSlice'
import {ITask} from "./interfaces";

const exampleTask: ITask = {
    id: '1',
    isCompleted: false,
    title: 'Tile',
    date: ''
}

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState)
})

test('should add new task', () => {
    const afterAdd = {
        ...initialState,
        toDoList: [...initialState.toDoList, exampleTask]
    }

    expect(reducer(initialState, addTask(exampleTask))).toEqual(afterAdd)
})

test('should remove added task', () => {
    const state = {
        ...initialState,
        toDoList: [exampleTask]
    }

    const afterRemove = {
        ...initialState,
        toDoList: [],
        removedTask: {
            index: 0,
            task: exampleTask
        }
    }

    expect(reducer(state, removeTask('1'))).toEqual(afterRemove)
})


