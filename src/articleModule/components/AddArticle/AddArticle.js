import { TextField } from "@mui/material";
import { useState } from "react";
import FileUploader from "../FileUploader/FileUploader";
import CustomButton from "../../../utils/components/CustomButton";
import {getArticleData, updateArticle, addArticle} from "../../services/article.service";
import { useParams } from "react-router-dom";
import PreviewProduct from "../../../utils/components/PreviewProduct/PreviewProduct";

function AddArticle({isMenu, title, isEditable, buttonText}) {
    const id = useParams();
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [fileUrl, setFileUrl] = useState('');    
    const [productsList, setProductsList] = useState([]);

    if (id.type !== undefined) {
        let articleData = getArticleData(id);
        setName(articleData.name);
        setPrice(articleData.price);
        setDescription(articleData.description);
        setFileUrl(articleData.img);
    }

    function handleSubmit(e) {
        if (!isEditable) {
            alert("Veuillez activer la modification pour enregistrer les changements !");
            return; 
        }
        e.preventDefault();
        if(id !== undefined){
            updateArticle(name, price, description, fileUrl, id, isMenu, productsList);
        }else{
            addArticle(name, price, description, fileUrl, isMenu);
        }
    }

    return(
        <div>
            <div className="flex flex-row justify-center">
                <form className="flex flex-col w-1/2 mx-auto items-center gap-y-4 p-4 justify-center">
                    <h1 className="text-secondaryTitle">{title}</h1>
                    <div className="w-full flex flex-row space-x-5">            
                        <TextField disabled={!isEditable} className="w-4/5" id="name" label="Nom du produit" defaultValue={name} variant='outlined' onChange={(e) => setName(e.target.value)}/>
                        <TextField disabled={!isEditable} className="w-1/5 " id="price" label="Prix" defaultValue={price} type='number' variant='outlined' onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <TextField disabled={!isEditable} className="w-full" id="description" label="Description" defaultValue={description} variant='outlined' onChange={(e) => setDescription(e.target.value)}/>
                    <div className="w-full flex flex-row space-x-5">            
                        {/*<FileUploader disabled={!isEditable} className='w-2/5' handleFile={handleFile}/>  
                        <p className="bg-bgGreyColor w-3/5 ">{fileName}</p>    */}
                        <TextField disabled={!isEditable} className="w-full " id="file-url" label="Url de l'image" defaultValue={fileUrl} type='text' variant='outlined' onChange={(e) => setFileUrl(e.target.value)}/>
                    </div>
                    <CustomButton disabled={!isEditable} type="submit" onClick={handleSubmit} children={buttonText}/>  
                </form>
                <img src={fileUrl} alt="Exemple d'un produit" className="w-1/2 h-auto flex items-center justify-center p-4"/>
            </div>
            {isMenu ? <PreviewProduct productsList={productsList}/> : null}
        </div>
    );
}

export default AddArticle;