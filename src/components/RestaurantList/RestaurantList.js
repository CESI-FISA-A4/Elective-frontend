import { ThemeProvider } from "@mui/material/styles";
import {theme} from '../../contexts/MainPalette' 
import SearchBar from "../Searchbar/SearchBar";
import  Stack  from "@mui/material/Stack";
import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";

import getRestaurantListe from "../../services/search.service";
import Card from "../Card/Card";

function RestaurantList({ title }) {
    const [changeValue, setChangeValue] = useState('');
    const [cardValue,setCardValue] = useState([]);

    const handleSearchBarChange = async (RestaurantName) => {
        setChangeValue(RestaurantName);
        try {
            const response = await getRestaurantListe(RestaurantName);
            setCardValue(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const value = params.get('texteFieldValue');
        setChangeValue(value);
        handleSearchBarChange(changeValue);
    }, []); 


    return (
        <div>   
        <Header/>     
        <div>
            <ThemeProvider theme={theme}>
            <div className="mt-5 ml-5 mr-5 ">
                <Stack direction= 'column' spacing= '2'>    
                    <SearchBar value={changeValue} onSearchBarChange={handleSearchBarChange}/>
                    <div>
                        {title}
                    </div>
                </Stack>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-stretch">
                    {cardValue.map((response, index) => (
                        <div key={index} className="pt-5 sm:pl-5 ">                        
                            <Card img = {response[0]} title = {response[1]} description = {response[2]} price = {response[3]} rate = {response[4]} page = {response[5]} />
                        </div>
                    ))}
    
            </div>
            </ThemeProvider>
        </div>
        </div>
    )}

export default RestaurantList;