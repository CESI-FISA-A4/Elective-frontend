import { Box, Button, DialogActions, MenuItem, TextField } from '@mui/material';
import ProductService from '../../services/productsService';
import { useEffect, useState } from 'react';


function EditProduct({ onCancel, onNewProduct, cancelButtonEnabled = true, cancelButtonContent = "Annuler", applyButtonContent = "Valider", disabled = false, source = { type: "Voiture", label: "New product", price: 0, color: "Rouge" } }) {
    const [types, setTypes] = useState([]);
    const [colors, setColors] = useState([]);

    const [type, setType] = useState(source.type);
    const [label, setLabel] = useState(source.label);
    const [price, setPrice] = useState(source.price);
    const [colorProduct, setColorProduct] = useState(source.color);

    const productService = new ProductService();

    useEffect(() => {
        const fetchFormData = async () => {
            let colorsFetch = await productService.getColors();
            let typesFetch = await productService.getTypes();

            setColors(colorsFetch);
            setTypes(typesFetch);
        }

        fetchFormData();
    }, []);

    const onTypeChange = (e) => {
        setType(e.target.value);
    }

    const onLabelChange = (e) => {
        setLabel(e.target.value)
    }

    const onPriceChange = (e) => {
        setPrice(e.target.value)
    }

    const onColorChange = (e) => {
        setColorProduct(e.target.value)
    }

    const submitData = () => {
        let newProduct = {
            type: type,
            label: label,
            price: price,
            color: colorProduct
        }

        onNewProduct(newProduct);
    }

    return (
        <div className="EditProduct">
            <Box className='flex flex-col gap-4 py-2'>
                <TextField disabled={disabled} fullWidth error={false} required select label="Type" value={type} onChange={onTypeChange}>
                    {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField disabled={disabled} fullWidth error={false} required value={label} onChange={onLabelChange} label="Label" variant="outlined" />
                <TextField disabled={disabled} fullWidth error={false} required type="number" label="Prix" variant="outlined"
                    InputProps={{ inputProps: { min: 0 } }} value={price} onChange={onPriceChange} />

                <TextField disabled={disabled} fullWidth error={false} required select label="Couleur" value={colorProduct} onChange={onColorChange}>
                    {colors.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <DialogActions>
                    {cancelButtonEnabled &&
                        <Button onClick={onCancel} variant="outlined" color="inherit">{cancelButtonContent}</Button>
                    }
                    <Button onClick={submitData} variant="contained" color="primary" autoFocus>{applyButtonContent}</Button>
                </DialogActions>
            </Box>
        </div>
    );
}

export default EditProduct;
