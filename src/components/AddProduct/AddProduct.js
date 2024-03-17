import './AddProduct.css';
import FormModal from '../Modal/FormModal/FormModal';
import EditProduct from '../EditProduct/EditProduct';
import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';


function AddProduct({ open, onNewProduct, onCancel }) {
    const submitData = (newProduct) => {
        onNewProduct(newProduct);
    }

    return (
        <div className="AddProduct">
            <FormModal
                open={open}
                onClose={onCancel}
                title="Nouveau produit">
                <EditProduct
                    onCancel={onCancel}
                    onNewProduct={submitData}>
                </EditProduct>
            </FormModal>
        </div>
    );
}

export default AddProduct;
