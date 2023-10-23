import React, {FC, PropsWithChildren} from 'react';
import styles from './MainLayout.module.scss'

const MainLayout:FC<PropsWithChildren>  = ({children}) => {
    return (
        <main className={styles.layout}>
            <section className={styles.content}>
                {children}
            </section>
        </main>
    );
};

export default MainLayout;
