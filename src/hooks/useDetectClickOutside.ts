import {useEffect, useRef} from "react";

export const useDetectClickOutside = (callback: () => void) =>{
    const ref = useRef<any>()

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current?.contains(event?.target)) {
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return {ref}
}
