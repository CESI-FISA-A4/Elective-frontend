import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

function SearchBar({value = "", onSearchChange}) {
    const [text, setText] = useState(value)

    const handleSubmit = (e) => {
        e.preventDefault();

        onSearchChange(text);   
    }

    useEffect(() => {
        setText(value)
    }, [value])
    
    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <div className="flex row">
                <TextField className='w-96' value={text} onChange={(e) => setText(e.target.value)} label='Search your restaurant' variant="outlined"/>
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
        </form>
    )
};

export default SearchBar;