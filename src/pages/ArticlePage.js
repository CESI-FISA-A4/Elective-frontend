import React from "react";
import Header from "../components/Header/Header";
import AddArticle from "../components/AddArticle/AddArticle";
import { useState } from "react";
import {Switch, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


function ArticlePage() {

    const [isEditable, setIsEditable] = useState(true);
    const [isMenu , setIsMenu] = useState(false);
    const [title, setTitle] = useState('Ajouter un article');
    const [buttonText, setButtonText] = useState('Ajouter un article');


    function handleChangeArticleType() {
        setIsMenu(!isMenu);  
        let articleType = isMenu===true ? 'menu' : 'produit' ;
        let newTitle = 'Ajouter / modifier un ' + articleType;
        setTitle(newTitle);
    }

    function handleIconButtonClick(){
        setIsEditable(!isEditable)
        if (isEditable) {
            setButtonText(title);
        } else {
            setButtonText('Enregistrer mes modifications');
        }
    }

    return (
        <div>
            <Header title={title}/>
            <div className="flex flex-row justify-end items-center p-4">
                <p> Produit </p>
                <Switch onChange={handleChangeArticleType}/>
                <p> Menu </p>
                <IconButton className="ml-6" onClick={handleIconButtonClick}>
                    <EditIcon  />
                </IconButton>
            </div>
            <AddArticle isEditable={isEditable} buttonText={buttonText}/>
            {/*isMenu ? <ChooseQuantity /> : null*/}
        </div>
    );
}

export default ArticlePage;