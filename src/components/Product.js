import React, { useState, useEffect } from "react";
import ProductAPI from "../apis/Product";

export default function App() {
    const [products, setProducts] = useState({
        isLoading: true,
        data: []
    });

    useEffect(() => {
        const fetchProducts = async() => {
            const response = await ProductAPI.getAll();
            // console.log(response);

            setProducts({
                isLoading: false,
                data: response.data
            });
        };

        fetchProducts();
    }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.isLoading ? (
        "Loading..."
      ) : (
        <ol>
          {products.data.map(product => (
            <li key={product.id}>
              {product.label} ({product.type}) [{product.quantity} available(s)] ={'>'} {product.price} € {product.refundable ? "refundable" : "" }
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
