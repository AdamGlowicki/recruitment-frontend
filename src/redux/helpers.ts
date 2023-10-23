import {ITask} from "./interfaces";

export const getElementData = (array: Array<ITask>, id: string) => {
    const index = array.findIndex(item => item.id === id)
    const element = array.find(item => item.id === id)

    return {
        index,
        element
    }
}
