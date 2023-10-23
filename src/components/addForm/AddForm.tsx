import React, {FC} from 'react';
import styles from './AddForm.module.scss'
import {useHandleAddTask} from "./useHandleAddtask";
import IconButton from "../common/iconButton/IconButton";
import Input from "../common/input/Input";

type IProps = {
    taskId?: string
    setOpen: () => void
}


const AddForm:FC<IProps> = ({taskId, setOpen}) => {
    const {handleAddTask, task, handleChange} = useHandleAddTask({setOpen, taskId})

    return (
        <form className={styles.form} onSubmit={handleAddTask}>
            <Input type={'text'} name={'taskName'} label={'Tytuł'} value={task.taskName} onChange={handleChange} autoFocus/>
            <Input type={'date'} name={'taskDate'} label={'Data'} value={task.taskDate} onChange={handleChange}/>
            <IconButton isBig type={"submit"} iconName={taskId ? 'edit' :'add'}/>
        </form>
    );
};

export default AddForm;
