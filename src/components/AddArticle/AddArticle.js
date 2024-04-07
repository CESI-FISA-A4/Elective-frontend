import { TextField } from "@mui/material";
import { useState } from "react";
import FileUploader from "../FileUploader/FileUploader";
import {addArticle, uploadFileToS3} from "../../services/article.service";
import CustomButton from "../../utils/button";
import product_img from "../../assets/product.svg";

function AddArticle() {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileUrl, setFileUrl] = useState('');

    function handleSubmit(e) {
        addArticle(name, price, description, fileUrl);
    }

    function handleFile(file) {
        setFileName(file.name);
        let imgUrl = uploadFileToS3(file);
        setFileUrl(imgUrl);
    }

    return(
        <div className="flex flex-row">
            <form className="flex flex-col w-1/2 mx-auto items-center gap-y-4 p-4 justify-center">
                <div className="w-full flex flex-row space-x-5">            
                    <TextField className="w-4/5" id="name" label="Nom du produit" variant='outlined' onChange={(e) => setName(e.target.value)}/>
                    <TextField className="w-1/5 " id="price" label="Prix" type='number' variant='outlined' onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <TextField className="w-full" id="description" label="Description" variant='outlined' onChange={(e) => setDescription(e.target.value)}/>
                <div className="w-full flex flex-row space-x-5">            
                <FileUploader className='w-2/5' handleFile={handleFile}/>  
                            <p className="bg-bgGreyColor w-3/5 ">{fileName}</p>    
                </div>
                <CustomButton type="submit" onClick={handleSubmit} children={"Ajouter à la carte"}/>  
            </form>
            <img src={product_img} alt="Exemple d'un produit" className="w-1/2 h-auto flex items-center justify-center p-4"/>
        </div>


    );
}

export default AddArticle;