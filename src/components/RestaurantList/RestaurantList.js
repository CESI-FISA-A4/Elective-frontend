import { ThemeProvider } from "@mui/material/styles";
import {theme} from '../../contexts/MainPalette' 
import SearchBar from "../Searchbar/SearchBar";
import  Stack  from "@mui/material/Stack";
import Card from "../Card/Card";
import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
// import { useLocation } from "react-router-dom";

function RestaurantList({ title }) {
    const [changeValue, setChangeValue] = useState('');
    // const { locationState } = useLocation();


   const handleCallback = (data) => {
        console.log(data);
        setChangeValue(data);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const value = params.get('texteFieldValue');
        setChangeValue(value);
    }, []); 

    // useEffect(() => {
    //     setChangeValue(locationState.textFieldValue);
    // }, [locationState]);


    return (
        <div>   
        <Header/>     
        <div>
            <ThemeProvider theme={theme}>
            <div className="mt-5 ml-5">
                <Stack direction= 'column' spacing= '2'>    
                    <SearchBar value={changeValue} onSearchBarChange={handleCallback}/>
                    <div>
                        {title}
                    </div>
                </Stack>
            </div>
            <div className="flex ml-5 mr-5">
                <div className="mt-10 ">
                <Card/>
                </div>
                <div className="mt-10 ml-10">
                <Card/>
                </div>
                <div className="mt-10 ml-10">
                <Card/>
                </div>
            </div>
            </ThemeProvider>
        </div>
        </div>
    )}

export default RestaurantList;