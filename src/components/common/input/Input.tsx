import React, {FC} from 'react';
import styles from './Input.module.scss'

type IProps = {
    label?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: FC<IProps> = ({label, ...inputProps}) => {
    return (
        <label className={styles.label}>
            <span >{label}</span>
            <input className={styles.input} {...inputProps}/>
        </label>
    );
};

export default Input;
