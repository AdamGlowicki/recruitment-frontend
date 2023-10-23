import React from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {filter, filterSelector} from "../../redux/toDoSlice";

export const useSearch = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector(filterSelector)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        dispatch(filter(value))
    }

    return {
        handleChange,
        search
    }
}
