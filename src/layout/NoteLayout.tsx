import React, {FC, ReactNode} from 'react';
import styles from './NoteLayout.module.scss'

type IProps = {
    notes: ReactNode;
    add: ReactNode
}

const NoteLayout: FC<IProps> = ({notes, add}) => {
    return (
        <div className={styles.container}>
            <div className={styles.notes}>
                {notes}
            </div>
            <div className={styles.add}>
                {add}
            </div>
        </div>
    );
};

export default NoteLayout;
