import React, {FC, PropsWithChildren, useEffect} from 'react';
import styles from './Alert.module.scss'
import Portal from "../../../themes/portal/Portal";
import IconButton from "../iconButton/IconButton";

type IProps = {
    isOpen: boolean;
    handleClose: () => void
    duration?: number
}

const Alert: FC<PropsWithChildren<IProps>> = ({isOpen, handleClose, duration = 4000, children}) => {

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                handleClose()
            }, duration)
        }
    }, [isOpen])

    if (!isOpen) {
        return <></>
    }

    return (
        <Portal>
            <section className={styles.container}>
                <div className={styles.iconPositioner}>
                    <IconButton iconName={'close'} onClick={handleClose}/>
                </div>
                {children}
            </section>
        </Portal>
    );
};

export default Alert;
