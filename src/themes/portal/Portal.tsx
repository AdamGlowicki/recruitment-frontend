import React, {FC, PropsWithChildren, useEffect} from 'react';
import {createPortal} from "react-dom";

const alertRoot = document.getElementById('portal')

const Portal:FC<PropsWithChildren> = ({children}) => {
    const element = document.createElement('div')

    useEffect(() => {
        alertRoot?.appendChild(element)

        return () => {
            alertRoot?.removeChild(element)
        }
    }, [element])

    return createPortal(
        children,
        element
    )
};

export default Portal;
