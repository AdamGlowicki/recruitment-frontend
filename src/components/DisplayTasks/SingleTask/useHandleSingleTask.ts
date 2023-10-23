import {useAppDispatch} from "../../../redux/hooks";
import {IToggleTask} from "../../../redux/interfaces";
import {moveDown, moveUp, removeTask, toggleTask} from "../../../redux/toDoSlice";

export const useHandleSingleTask = (handleOpenAlert: () => void ) => {
    const dispatch = useAppDispatch()

    const handleCompleteTask = ({id, isCompleted}: IToggleTask) => () => {
        dispatch(toggleTask({id, isCompleted: !isCompleted}))
    }

    const handleRemoveTask = (id: string) => () => {
        dispatch(removeTask(id))
        handleOpenAlert()
    }

    const handleMoveUp = (id: string) => () => {
        dispatch(moveUp(id))
    }

    const handleMoveDown = (id: string) => () => {
        dispatch(moveDown(id))
    }

    return {
        handleRemoveTask,
        handleCompleteTask,
        handleMoveUp,
        handleMoveDown
    }
}
