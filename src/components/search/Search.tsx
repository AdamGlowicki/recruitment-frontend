import React from 'react';
import styles from './Search.module.scss'
import Input from "../common/input/Input";
import {useSearch} from "./useSearch";

const Search = () => {
    const {handleChange, search} = useSearch()
    return (
        <div className={styles.container}>
            <Input value={search} onChange={handleChange} placeholder={'Wyszukaj zadania'} type="text"/>
        </div>
    );
};

export default Search;
