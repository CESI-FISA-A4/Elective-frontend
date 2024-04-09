import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { useState } from 'react';



function PreviewProduct({ productsList }) {

  const [basketItems, setBasketItems] = useState([]); 

  function addToBasket(e, productId) {
    e.preventDefault();
    let newBasketItems = [...basketItems];
    let existingItemIndex = newBasketItems.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
      newBasketItems[existingItemIndex].quantity++;
    } else {
      let newBasketItem = { id: productId, productName: productsList[productId].name, quantity: 1 };
      newBasketItems.push(newBasketItem);
    }
    setBasketItems(newBasketItems);
  }
  

  function isInBasket(id){
    return basketItems.find((item) => item.id === id);
  }

  function findQuantity(id){
    if (isInBasket(id)) {
      let elementIndex = basketItems.findIndex((item) => item.id === id);
      return elementIndex !== -1 ? basketItems[elementIndex].quantity : 0;
    }else {
      return 0;
    }
  }


  return (
    <div className='ml-6 flex flex-row w-full gap-6 overflow-auto'>
      test
    {productsList.map((item) => (
        <Card orientation="horizontal" size="sm" key={item.id} variant="outlined">
          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <img
              srcSet={`${item.imageUrl}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imageUrl}?h=120&fit=crop&auto=format`}
              alt={item.name}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }} onClick={(e) => addToBasket(e, item.id)}> 
            <Typography level="title-md">{item.name}</Typography>
            <Typography level="body-md">{findQuantity(item.id)}</Typography>
          </Box>
        </Card>
      ))}
      </div>
  );
}

export default PreviewProduct;