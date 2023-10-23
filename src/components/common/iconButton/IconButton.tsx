import React, {FC} from 'react';
import styles from './IconButton.module.scss'
import cx from "classnames";

type IProps = {
    iconName: string
    isRotate?: boolean
    isBig?: boolean;
    isMedium?: boolean
    isWhole?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const IconButton: FC<IProps> = ({iconName, isRotate, isBig, isMedium, isWhole, ...buttonProps}) => {

    const buttonClass = cx({
        [styles.button]: true,
        [styles.rotate]: isRotate,
        [styles.whole]: isWhole
})

    const iconClass = cx({
        [styles.icon]: true,
        [styles.big]: isBig,
        [styles.medium]: isMedium,
    })

    return (
        <button data-testid={'iconButton'} className={buttonClass} {...buttonProps}>
            <img className={iconClass} src={`icons/${iconName}.svg`} alt={iconName}/>
        </button>
    );
};

export default IconButton;
