import {useMemo} from "react";
import {useAppSelector} from "../../redux/hooks";
import {filterSelector, selectTasks} from "../../redux/toDoSlice";

export const useGetTasks = () => {
    const tasks = useAppSelector(selectTasks)
    const search = useAppSelector(filterSelector)

    const filteredTasks = useMemo(() => {
        return tasks.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }, [tasks, search])

    const sortedTasks = useMemo(() => {
        const toDoTasks = filteredTasks.filter(item => !item.isCompleted)
        const completedTasks = filteredTasks.filter(item => item.isCompleted)

        return [...toDoTasks, ...completedTasks]
    }, [filteredTasks])

    return {sortedTasks, search}
}
