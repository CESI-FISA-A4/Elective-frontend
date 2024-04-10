import React, { useEffect } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { useState } from 'react';

function PreviewProduct({ prodList }) {

  const [basketItems, setBasketItems] = useState([]); 
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    if (prodList !== undefined){
      setProductsList(prodList); 
    }
  }, [prodList])

  function addToBasket(e, productId) {
    e.preventDefault();
    let newBasketItems = [...basketItems];
    let existingItemIndex = newBasketItems.findIndex(item => item.productId === productId);
    if (existingItemIndex !== -1) {
      newBasketItems[existingItemIndex].quantity++;
    } else {
      let productIdInList = productsList.findIndex(item => item.productId === productId);
      let newBasketItem = { productId: productId, productName: productsList[productIdInList].name, quantity: 1 };
      newBasketItems.push(newBasketItem);
    }
    setBasketItems(newBasketItems);
    let productIdList = []; 
    newBasketItems.forEach((element) => {
      for (let i=0; i < element.quantity; i++){
        productIdList.push(element.productId);
      }
    }
    )
    localStorage.setItem("productIdList", productIdList);
  }
  
  function isInBasket(id){
    let element = basketItems.find((item) => item.productId === id);
    return element == undefined ? false : true;
  }

  function findQuantity(id){
    if (isInBasket(id)) {
      let elementIndex = basketItems.findIndex((item) => item.productId === id);
      return elementIndex !== -1 ? basketItems[elementIndex].quantity : 0;
    }else {
      return 0;
    }
  }

  return (
    <div className='ml-6 flex flex-row w-full gap-6 overflow-auto'>
    {productsList.map((item) => (
        <Card orientation="horizontal" size="sm" key={item.productId} variant="outlined">
          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <img
              srcSet={`${item.imageUrl}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imageUrl}?h=120&fit=crop&auto=format`}
              alt={item.name}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }} onClick={(e) => addToBasket(e, item.productId)}> 
            <Typography level="title-md">{item.name}</Typography>
            <Typography level="body-md">{findQuantity(item.productId)}</Typography>
          </Box>
        </Card>
      ))}
      </div>
  );
}

export default PreviewProduct;