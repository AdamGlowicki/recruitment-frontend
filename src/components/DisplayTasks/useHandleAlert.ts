import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {removedTaskSelector, restoreTask} from "../../redux/toDoSlice";
import {useState} from "react";

export const useHandleAlert = () => {
    const [isOpenAlert, setOpenAlert] = useState(false)
    const dispatch = useAppDispatch()
    const removedTask = useAppSelector(removedTaskSelector)

    const openAlert = () => {
        setOpenAlert(true)
    }

    const closeAlert = () => {
        setOpenAlert(false)
    }

    const handleRestoreTask = () => {
        dispatch(restoreTask())
        closeAlert()
    }

    return {
        isOpenAlert,
        removedTask,
        closeAlert,
        openAlert,
        handleRestoreTask
    }
}
