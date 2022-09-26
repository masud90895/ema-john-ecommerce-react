import React, { useEffect, useState } from 'react';
import { getStoredCard } from '../../utilities/fakedb';
import Product from '../Product/Product';

const Products = ({setProductItem,productItem}) => {
    const [products,setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const storedCard =getStoredCard()
        const saveCard = [];
        for (const id in storedCard) {
            const addedProducts=products.find(product => product.id === id)
            if(addedProducts)  {
                const quantity = storedCard[id];
                addedProducts.quantity = quantity;
                saveCard.push(addedProducts)
            }       
        }
        // setProduct(saveCard);
        setProductItem(saveCard);
    },[products])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-20 mt-10'>
            {
                products.map(product=> <Product key={product.id} products={products} product={product} setProductItem={setProductItem} setProduct={setProduct} productItem={productItem}></Product>)
            }
        </div>
    );
};

export default Products;