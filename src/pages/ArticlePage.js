import React from "react";
import AddArticle from "../articleModule/components/AddArticle/AddArticle";
import { useState } from "react";
import {Switch, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


function ArticlePage() {

    const [isEditable, setIsEditable] = useState(true);
    const [isMenu , setIsMenu] = useState(false);
    const [title, setTitle] = useState('Ajouter un article');
    const [buttonText, setButtonText] = useState('Ajouter un article');


    function handleChangeArticleType(e) {
        let newIsMenuValue = e.target.checked;
        let articleType = newIsMenuValue ? 'menu' : 'produit' ;
        let newTitle = 'Ajouter / modifier un ' + articleType;
        setIsMenu(newIsMenuValue); 
        setTitle(newTitle);
        setButtonText(newTitle);
    }

    function handleIconButtonClick(){
        setIsEditable(!isEditable)
        if (!isEditable) {
            setButtonText(title);
        } else {
            setButtonText('Enregistrer mes modifications');
        }
    }

    return (
        <div>
            <div className="flex flex-row justify-end items-center p-4">
                <p> Produit </p>
                <Switch onChange={handleChangeArticleType}/>
                <p> Menu </p>
                <IconButton className="ml-6" onClick={handleIconButtonClick}>
                    <EditIcon  />
                </IconButton>
            </div>
            <AddArticle isMenu={isMenu} title={title} isEditable={isEditable} buttonText={buttonText}/>
            {/*isMenu ? <ChooseQuantity /> : null*/}
        </div>
    );
}

export default ArticlePage;