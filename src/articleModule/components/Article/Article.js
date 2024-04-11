import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './article.css';
import { useEffect, useState } from 'react';


function Article({ quant, data, onSelect }) {

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(quant);
    }, [quant]);

    return (
            <Card className='article' onClick={onSelect}>
                <CardMedia
                    component="img"
                    height="140"
                    srcSet={data.imageUrl}
                    alt={data.name}
                />
                <CardContent className='content'>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name} - {data.price} € 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {quantity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
            </Card>
    );
}


export default Article;