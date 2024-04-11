import React from "react";
import AddArticle from "../articleModule/components/AddArticle/AddArticle";
import { useState } from "react";
import {Switch, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useParams, useLocation } from "react-router-dom";


function ArticlePage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [isEditable, setIsEditable] = useState(true);
    const [isMenu , setIsMenu] = useState(queryParams.get('isMenu') === null ? false : queryParams.get('isMenu'));
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
        let newIsEditableValue = !isEditable;
        setIsEditable(newIsEditableValue)
        if (newIsEditableValue === false) {
            setButtonText(title);
        } else {
            setButtonText('Enregistrer mes modifications');
        }
    }

    return (
        <div>
            <div className="flex flex-row justify-end items-center p-4">
                <p> Produit </p>
                <Switch defaultChecked={isMenu} onChange={handleChangeArticleType}/>
                <p> Menu </p>
                <IconButton className="ml-6" onClick={handleIconButtonClick}>
                    <EditIcon  />
                </IconButton>
            </div>
            {isMenu &&
                <AddArticle isMenu={true} title={title} isEditable={isEditable} buttonText={buttonText}/>}
            {!isMenu &&
                <AddArticle isMenu={false} title={title} isEditable={isEditable} buttonText={buttonText}/>}
        </div>
    );
}

export default ArticlePage;