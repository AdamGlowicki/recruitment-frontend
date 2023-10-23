import React, {useState} from 'react';
import Modal from "../common/modal/Modal";
import AddForm from "../addForm/AddForm";
import IconButton from "../common/iconButton/IconButton";
import styles from './AddTask.module.scss'

const AddTask = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            <section className={styles.container}>
                <IconButton isWhole iconName={'add'} isBig onClick={toggleOpen}/>
            </section>
            <Modal isOpen={isOpen} handleClose={toggleOpen}>
                <AddForm setOpen={toggleOpen}/>
            </Modal>
        </>
    );
};

export default AddTask;
