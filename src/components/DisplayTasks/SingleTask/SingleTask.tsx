import React, {FC, forwardRef, useState} from 'react';
import styles from './SingleTask.module.scss'
import cx from 'classnames'
import {useHandleSingleTask} from "./useHandleSingleTask";
import {ITask} from "../../../redux/interfaces";
import IconButton from "../../common/iconButton/IconButton";
import Modal from "../../common/modal/Modal";
import AddForm from "../../addForm/AddForm";

type IProps = {
    task: ITask;
    handleOpenAlert: () => void
}

const SingleTask:FC<IProps> = forwardRef<HTMLElement, IProps>(({task, handleOpenAlert}, ref) => {
    const {handleCompleteTask, handleRemoveTask, handleMoveUp, handleMoveDown} = useHandleSingleTask(handleOpenAlert)

    const [isOpenEdit, setOpenEdit] = useState(false)

    const toggleOpenEdit = () => {
        setOpenEdit(prev => !prev)
    }

    const {id, isCompleted, title, date} = task || {}

    const titleClass = cx({
        [styles.title]: true,
        [styles.isComplete]: isCompleted
    })

    const taskClass = cx({
        [styles.taskContainer]: true,
        [styles.complete]: isCompleted,
    })

    return (
        <>
            <section className={taskClass} ref={ref}>
                <div className={styles.leftSide}>
                    <input type="checkbox" checked={isCompleted} onChange={handleCompleteTask({id, isCompleted})}/>
                    <div className={styles.verticalPositioner}>
                        <p className={`${titleClass} bold`}>{title}</p>
                        <p className={`${titleClass} bold`}>{date}</p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.verticalPositioner}>
                        <IconButton iconName={'bin'} onClick={handleRemoveTask(id)}/>
                        <IconButton iconName={'edit'} onClick={toggleOpenEdit}/>
                    </div>
                    <div className={styles.verticalPositioner}>
                        <IconButton iconName={'arrow'} onClick={handleMoveUp(id)}/>
                        <IconButton iconName={'arrow'} isRotate onClick={handleMoveDown(id)}/>
                    </div>
                </div>
            </section>

            <Modal isOpen={isOpenEdit} handleClose={toggleOpenEdit}>
                <AddForm setOpen={toggleOpenEdit} taskId={id} />
            </Modal>
        </>

    );
});

export default SingleTask;
