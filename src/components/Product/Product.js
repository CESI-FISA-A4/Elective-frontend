import { useNavigate, useParams } from 'react-router-dom';
import './Product.css';
import ProductService from '../../services/productsService';
import { Fragment, useEffect, useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import EditProduct from '../EditProduct/EditProduct';
import BackButton from '../Shared/BackButton/BackButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ConfirmDeletion from '../Modal/ConfirmDeletion/ConfirmDeletion';


function Product() {
    const [product, setProduct] = useState({
        loading: false,
        data: {}
    });
    const [deletionModalOppened, setDeletionModalOppened] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const productService = new ProductService();

    async function fetchData() {
        setProduct({ loading: false, data: product.data });

        try {
            const data = await productService.getProductById(parseInt(id));
            setProduct({ loading: true, data: data });
            // console.log("[200] Product successfully fetched!");
        } catch (error) {
            console.log("[500] Product fetched error!");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const submitData = async (productUpdated) => {
        await productService.editProductById(parseInt(id), { id: parseInt(id), ...productUpdated });

        navigate({ pathname: '/products' });
    }

    const resetSource = () => {
        setProduct({ ...product });
    }

    const onCloseDeletionModal = () => {
        setDeletionModalOppened(false);
    }

    const onConfirmDeletionModal = async() => {
        setDeletionModalOppened(false);
        
        await productService.removeProductById(parseInt(id));

        navigate({ pathname: '/products' });
    }

    return (
        <Fragment>
            <BackButton redirectPath='/products'></BackButton>
            <div className="Product flex flex-col items-center">

                <div className="flex gap-10 items-center">
                    <h1 className='text-2xl font-bold text-center px-3'>Produit</h1>
                    <Button sx={{ marginY: 1 }} color="error" variant="contained" onClick={() => setDeletionModalOppened(true)}>
                        <DeleteOutlinedIcon/>
                    </Button>
                </div>

                <ConfirmDeletion 
                    open={deletionModalOppened}
                    onClose={onCloseDeletionModal}
                    onConfirm={onConfirmDeletionModal}
                    title="Confirmation de la suppression ?"
                    content="Voulez-vous vraiment supprimer ce(s) produit(s) ?">
                </ConfirmDeletion>

                {!product.loading ?
                    <p>Loading...</p> :
                    <Card sx={{ minWidth: 275, maxWidth: 700 }}>
                        <CardContent>
                            <div className='flex justify-between'>
                                <EditProduct
                                    onCancel={resetSource}
                                    onNewProduct={submitData}
                                    source={product.data}
                                    cancelButtonEnabled={false}
                                    applyButtonContent={"Modifier"}>
                                </EditProduct>
                            </div>
                        </CardContent>
                    </Card>
                }
            </div>
        </Fragment >
    );
}

export default Product;
