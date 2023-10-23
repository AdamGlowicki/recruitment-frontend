import React, {FC, PropsWithChildren} from 'react';
import styles from './Button.module.scss'

type IProps = {
    onClick: () => void
}

const Button: FC<PropsWithChildren<IProps>> = ({children, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
