import * as React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

function SearchBar({value = "", onSearchBarChange}) {
    const [textFieldValue, setTextFieldValue] = useState(value)

    const handleChangeUserInput = (e) => {
        setTextFieldValue(e.target.value);   
    };

    async function handleClick () {
        onSearchBarChange(textFieldValue);   
    }

    useEffect(() => {
        setTextFieldValue(value)
    }, [value])
    

    return (
        <Paper className='flex sm:w-1/2'>
            <TextField sx={{ ml: 1, flex: 1 }}   value={textFieldValue} onChange={handleChangeUserInput} label='Search your restaurant' variant="outlined"/>
            <IconButton onClick={handleClick} type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
};

export default SearchBar;