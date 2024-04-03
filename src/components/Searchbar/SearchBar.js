import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from 'react';

function SearchBar({value = "", onSearchBarChange}) {
    const [textFieldValue, setTextFieldValue] = useState(value)

    const handleUserInput = (e) => {
        setTextFieldValue(e.target.value);   
    };

    async function handleClick () {
        onSearchBarChange(textFieldValue);   
    }

    useEffect(() => {
        setTextFieldValue(value)
    }, [value])
    

    return (
        <div>
            <Paper component="form"sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 750 }}>
                <TextField
                    value={textFieldValue} 
                    onChange={handleUserInput}
                    label='Search your restaurant'
                    variant="outlined"
                    color="secondary"
                    sx={{ width: 700 }}    
                />
                <IconButton onClick={handleClick} type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>  
        </div>
    )
};

export default SearchBar;