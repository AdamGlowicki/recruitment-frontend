import React, {FC, PropsWithChildren} from 'react';
import Portal from "../../../themes/portal/Portal";
import styles from './Modal.module.scss'
import {useDetectClickOutside} from "../../../hooks/useDetectClickOutside";

type IProps = {
    isOpen: boolean
    handleClose: () => void
}

const Modal: FC<PropsWithChildren<IProps>> = ({children, isOpen, handleClose}) => {
    const {ref} = useDetectClickOutside(handleClose)

    if (!isOpen) return <></>

    return (
        <Portal>
            <section className={styles.fade}>
                <section ref={ref} className={styles.content}>{children}</section>
            </section>
        </Portal>
    );
};

export default Modal;
