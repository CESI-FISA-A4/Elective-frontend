import { useContext, useEffect, useState } from 'react';
import './ProductList.css';
import ProductService from '../../services/productsService';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyleContext } from '../../contexts/StyleProvider';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ConfirmDeletion from '../Modal/ConfirmDeletion/ConfirmDeletion';
import AddProduct from '../AddProduct/AddProduct';



function ProductList() {
    const [productList, setProductList] = useState({
        loading: false,
        data: []
    });
    const [selectAll, setSelectAll] = useState(false);
    const [rowSelected, setRowSelected] = useState({});
    const [deletionModalOppened, setDeletionModalOppened] = useState(false);
    const [addModalOppened, setAddModalOppened] = useState(false);

    const style = useContext(StyleContext);
    const navigate = useNavigate();

    const productService = new ProductService();

    async function fetchData() {
        setProductList({ loading: false, data: productList.data });

        try {
            const data = await productService.getAllProducts();
            setProductList({ loading: true, data: data });
            // console.log("[200] ProductList successfully fetched!");
        } catch (error) {
            console.log("[500] ProductList fetched error!");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onAddProductClick = () => {
        setAddModalOppened(true);
    }

    const onRowClick = (row) => {
        navigate({ pathname: `/products/${row.id}` });
    }

    const unSelectAllRow = () => {
        if (productList.data.length) {
            for (let i = 0; i < productList.data.length; i++) {
                const product = productList.data[i];
                rowSelected[product.id.toString()] = false;
            }
            setRowSelected({ ...rowSelected });
            setSelectAll(!selectAll);
        }
    }

    const onSelectAllClick = () => {
        if (productList.data.length) {
            for (let i = 0; i < productList.data.length; i++) {
                const product = productList.data[i];
                rowSelected[product.id.toString()] = !selectAll;
            }
            setRowSelected({ ...rowSelected });
            setSelectAll(!selectAll);
        }
    }

    const isAllRowSelected = () => {
        let allState = true;

        if(!productList.data.length) return false;

        for (let i = 0; i < productList.data.length; i++) {
            const product = productList.data[i];
            if (!rowSelected[product.id.toString()]) {
                allState = false;
                break;
            }
        }
        return allState;
    }

    const isOneRowSelected = () => {
        for (let i = 0; i < productList.data.length; i++) {
            const product = productList.data[i];
            if (rowSelected[product.id.toString()]) return true;
        }

        return false;
    }

    const onSelectRowClick = (row) => {
        rowSelected[row.id.toString()] = !rowSelected[row.id.toString()];
        setRowSelected({ ...rowSelected });


        setSelectAll(isAllRowSelected());
    }

    const onCloseDeletionModal = () => {
        setDeletionModalOppened(false);
    }

    const onConfirmDeletionModal = () => {
        setDeletionModalOppened(false);
        
        for (let i = 0; i < productList.data.length; i++) {
            const product = productList.data[i];
            if (rowSelected[product.id.toString()]){
                productService.removeProductById(product.id);
                fetchData();
            }
        }

        setSelectAll(false);
    }

    const handleNewProduct = async(newProduct) => {
        productService.addProduct(newProduct);

        await fetchData();

        setAddModalOppened(false);

        unSelectAllRow();
        setSelectAll(false);
    }

    return (
        <div className="ProductList">
            <div className="flex justify-between p-2">
                <div className="flex items-center">
                    <h1 className='text-2xl font-bold text-center p-3'>Liste des produits</h1>
                    <IconButton aria-label="add" color='info' onClick={onAddProductClick}>
                        <AddBoxOutlinedIcon fontSize="large" />
                    </IconButton>
                </div>

                {isOneRowSelected() &&
                    <Button sx={{ marginY: 1 }} color="error" variant="contained" onClick={() => setDeletionModalOppened(true)}>
                        <DeleteOutlinedIcon className='mr-3' />
                        Delete
                    </Button>
                }
            </div>

            <ConfirmDeletion 
                open={deletionModalOppened}
                onClose={onCloseDeletionModal}
                onConfirm={onConfirmDeletionModal}
                title="Confirmation de la suppression ?"
                content="Voulez-vous vraiment supprimer ce(s) produit(s) ?">
            </ConfirmDeletion>

            <AddProduct open={addModalOppened} onCancel={() => setAddModalOppened(false)} onNewProduct={handleNewProduct}></AddProduct>

            {!productList.loading ?
                <p>Loading...</p> :
                <TableContainer component={Paper} className='my-1' sx={{maxHeight: 500}}>
                    <Table sx={{ minWidth: 650 }} size='small' aria-label="simple table">
                        <TableHead style={style.bgLightGrey}>
                            <TableRow>
                                <TableCell align="right" className='w-20'>
                                    <Checkbox
                                        color="primary"
                                        indeterminate={false}
                                        checked={selectAll}
                                        onChange={onSelectAllClick}
                                        inputProps={{
                                            'aria-label': 'select all',
                                        }}
                                    />
                                </TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Label</TableCell>
                                <TableCell align="right">Prix</TableCell>
                                <TableCell align="right">Couleur</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productList.data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="right">
                                        <Checkbox
                                            color="primary"
                                            checked={rowSelected[row.id.toString()] ? rowSelected[row.id.toString()] : false}
                                            onChange={() => onSelectRowClick(row)}
                                            inputProps={{
                                                'aria-labelledby': "labelId",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell onClick={() => onRowClick(row)} align="right">{row.id}</TableCell>
                                    <TableCell onClick={() => onRowClick(row)} align="right">{row.type}</TableCell>
                                    <TableCell onClick={() => onRowClick(row)} align="right">{row.label}</TableCell>
                                    <TableCell onClick={() => onRowClick(row)} align="right">{row.price} €</TableCell>
                                    <TableCell onClick={() => onRowClick(row)} align="right">{row.color}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
}

export default ProductList;
