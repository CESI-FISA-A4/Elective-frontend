import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import CustomButton from "../../../utils/components/CustomButton";
import {getProductsByRestaurantId, getArticleData, updateArticle, addArticle} from "../../services/article.service";
import { useParams, useLocation } from "react-router-dom";
import PreviewProduct from "../../../utils/components/PreviewProduct/PreviewProduct";

function AddArticle({isMenu, title, isEditable, buttonText}) {
    const {id} = useParams();


    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [fileUrl, setFileUrl] = useState('');    
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        async function InitializeData(){
            async function fetchData() {
                let newProductList = [];
                if (id !== undefined) {
                    try{
                        let articleData = await getArticleData(id, isMenu);
                        if (articleData != undefined) {
                            return articleData;
                         }else {
                            throw new Error("Une erreur s'est produite ! Veuillez rafraichir la page.");
                         }                    
                    } catch (error) {
                        alert(error)
                    }
                }
                return {}; 
            }
            const articleData = await fetchData();
            if (articleData.status != 404){
                setName(articleData.name);
                setPrice(articleData.price);
                setDescription(articleData.description);
                setFileUrl(articleData.imageUrl);
            }
        }
        async function getProducts(){
            let newProductList;
            if (isMenu) {
                newProductList = await getProductsByRestaurantId();
            }
            setProductsList(newProductList);
        }
        if (id !== undefined){
            InitializeData();
        }
        getProducts();
    }, [id, isMenu]);

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
            <div className="flex flex-col sm:flex-row justify-center">
                <form className="flex flex-col w-4/5 sm:w-1/2 mx-auto items-center gap-y-4 p-4 justify-center">
                    <h1 className="text-secondaryTitle">{title}</h1>
                    <div className="w-full flex flex-row space-x-5">            
                        <TextField disabled={!isEditable} className="w-4/5" id="name" label="Nom du produit" value={name ?? ""} variant='outlined' onChange={(e) => setName(e.target.value)}/>
                        <TextField disabled={!isEditable} className="w-1/5 " id="price" label="Prix" value={price ?? 0} type='number' variant='outlined' onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <TextField disabled={!isEditable} className="w-full" id="description" label="Description" value={description ?? ""} variant='outlined' onChange={(e) => setDescription(e.target.value)}/>
                    <div className="w-full flex flex-row space-x-5">            
                        <TextField disabled={!isEditable} className="w-full " id="file-url" label="Url de l'image" value={fileUrl ?? ""} type='text' variant='outlined' onChange={(e) => setFileUrl(e.target.value)}/>
                    </div>
                    <CustomButton disabled={!isEditable} type="submit" onClick={handleSubmit} children={buttonText}/>  
                </form>
                <img src={fileUrl} alt="Exemple d'un produit" className="w-1/2 h-auto flex items-center justify-center p-4"/>
            </div>
            {isMenu ? <PreviewProduct prodList={productsList}/> : null}
        </div>
    );
}

export default AddArticle;