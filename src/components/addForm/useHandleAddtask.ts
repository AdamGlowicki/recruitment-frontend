import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {ITask} from "../../redux/interfaces";
import {addTask, editTask, selectTasks} from "../../redux/toDoSlice";

type IParams = {
    taskId?: string;
    setOpen: () => void
}

export const useHandleAddTask = ({taskId, setOpen}: IParams) => {
    const [task, setTask] = useState({
        taskName: '',
        taskDate: ''
    })

    const dispatch = useAppDispatch()
    const tasks = useAppSelector(selectTasks)

    useEffect(() => {
        if (taskId) {
            getTaskToEdit()
        }
    },[taskId])

    const getTaskToEdit = () => {
        const task = tasks.find(item => item.id === taskId)
        if (task) {
            setTask({
                taskName: task.title,
                taskDate: task.date,
            })
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault()
        if (! task.taskName) return

        const newTask: ITask = {
            id: Math.random().toString(),
            isCompleted: false,
            title: task.taskName,
            date: task.taskDate
        }

        dispatch(taskId ? editTask(newTask) :addTask(newTask))

        resetInputs()
        setOpen()
    }

    const resetInputs = () => {
        setTask({
            taskName: '',
            taskDate: ''
        })
    }

    return {
        task,
        handleChange,
        handleAddTask,
    }
}
