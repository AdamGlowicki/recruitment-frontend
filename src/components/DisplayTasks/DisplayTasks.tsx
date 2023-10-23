import React, {createRef} from 'react';
import styles from './DisplayTasks.module.scss'
import SingleTask from "./SingleTask/SingleTask";
import {useHandleAlert} from "./useHandleAlert";
import {useGetTasks} from "./useGetTasks";
import AnimatedArray from "../../themes/animatedArray/AnimatedArray";
import Alert from "../common/alert/Alert";
import Button from "../common/button/Button";

const DisplayTasks = () => {
    const {sortedTasks, search} = useGetTasks()
    const {isOpenAlert, removedTask, handleRestoreTask, closeAlert, openAlert} = useHandleAlert()

    const displayMessage = search ? 'Brak wyników' : "Dodaj nowe zadanie"

    return (
        <>
            <section className={styles.container}>
                <section className={styles.toDoContainer}>
                    {sortedTasks.length ? (
                        <AnimatedArray>
                            {sortedTasks.map(task => (
                                // @ts-ignore
                                <SingleTask handleOpenAlert={openAlert} task={task} key={task.id} ref={createRef()}/>
                            ))}
                        </AnimatedArray>
                    ) : (
                        <p className={styles.empty}>{displayMessage}</p>
                    )}
                </section>

                <Alert isOpen={isOpenAlert} handleClose={closeAlert}>
                    <div className={styles.alertContainer}>
                        <p>Usunięto zadanie: {removedTask.task?.title}</p>
                        <Button onClick={handleRestoreTask}>Przywróć usunięte zadanie</Button>
                    </div>
                </Alert>
            </section>
        </>
    );
};

export default DisplayTasks;
