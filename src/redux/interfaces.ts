export interface ITask {
    id: string;
    title: string;
    date: string;
    isCompleted: boolean
}

export interface IToDoState {
    toDoList: Array<ITask>
    removedTask: {
        task: ITask | null,
        index: number
    },
    filter: string
}

export type IToggleTask = Pick<ITask, 'id' | 'isCompleted'>
