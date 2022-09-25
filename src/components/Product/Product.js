import React from 'react';

const Product = (props) => {
    const {id,category,name,seller,price,img,ratings} =props.product;
    const handelAddToCard=()=>{
      props.setProductItem((previesItems)=>{
          return [...previesItems , props.product]
      })
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure >
    <img src={img} alt="Shoes" />
    </figure>
  <div className="p-4">
    <h2 className="card-title text-left w-full">
      {name}
    </h2>
    <div className='text-left'>
         <p>price : {price}</p>  
        <p><small>Manufacturer : {seller}</small></p>
        <p><small>Rating : {ratings} star</small></p>
    </div>
    <button onClick={handelAddToCard} className="btn btn-outline btn-warning w-full mt-2">Add to Cart</button>
  </div>
</div>
        </div>
    );
};

export default Product;