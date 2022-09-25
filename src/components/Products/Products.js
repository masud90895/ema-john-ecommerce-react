import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({setProductItem}) => {
    const [products,setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-20 mt-10'>
            {
                products.map(product=> <Product key={product.id} product={product} setProductItem={setProductItem}></Product>)
            }
        </div>
    );
};

export default Products;